# -*- mode: ruby -*-
# vi: set ft=ruby :

# Based on this box:
# => https://github.com/joaquimserafim/vagrant-nodejs-redis-mongodb

box      = 'ubuntu/trusty64'
hostname = 'emberclibox'
domain   = 'example.com'
ip       = '192.168.42.42'
ram      = '512'

# sudo su vagrant -c source /home/vagrant/profile
# sudo su vagrant -c source /home/vagrant/.bashrc
# sudo su vagrant -c nvm install 0.10
# sudo su vagrant -c nvm alias default 0.10
$rootScript = <<SCRIPT
  echo "I am provisioning..."
  echo doing it as $USER
  cd /home/vagrant
  add-apt-repository ppa:git-core/ppa
  apt-get update
  apt-get install -y vim git-core curl
SCRIPT

$userScript = <<SCRIPT
  cd /home/vagrant
  wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
  export NVM_DIR="/home/vagrant/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
  nvm install 0.10.33
  nvm alias default 0.10.33
  npm update -g npm
  npm install -g bower ember-cli
SCRIPT

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = box
  config.vm.hostname = hostname

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Forwarding default ports for ember server and livereload
  config.vm.network :forwarded_port, guest: 4200, host: 4200, auto_correct: true
  config.vm.network :forwarded_port, guest: 35729, host: 35729, auto_correct: true
  config.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true
  config.vm.network :forwarded_port, guest: 27017, host: 27017, auto_correct: true
  config.vm.network :forwarded_port, guest: 6379, host: 6379, auto_correct: true

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "10.42.42.42"

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  config.ssh.forward_agent = true

  # http://blog.liip.ch/archive/2012/07/25/vagrant-and-node-js-quick-tip.html
  # config.vm.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant",
    owner: "vagrant", group: "vagrant"

  # Removes "stdin: is not a tty" annoyance as per
  # https://github.com/SocialGeeks/vagrant-openstack/commit/d3ea0695e64ea2e905a67c1b7e12d794a1a29b97
  #config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    vb.customize  [
                    "modifyvm", :id,
                    "--memory", ram,
                  ]
    # Allow the creation of symlinks for nodejs
    vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant","1"]
  end

  # Shell provisioning.
  config.vm.provision "shell", inline: $rootScript
  config.vm.provision "shell", inline: $userScript, privileged: false

  #config.vm.provision "shell", inline: $buildDepsScript, privileged: false

  # Puppet stand alone provisioning.

  # config.vm.provision :puppet do |puppet|
  #   puppet.manifests_path = "vagrant/puppet/manifests"
  #   puppet.module_path    = "vagrant/puppet/modules"
  #   puppet.manifest_file  = "main.pp"
  #   puppet.options        = [
  #                             '--verbose',
  #                             #'--debug',
  #                           ]
  # end


end
