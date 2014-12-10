# -*- mode: ruby -*-
# vi: set ft=ruby :

# Based on this box:
# => https://github.com/joaquimserafim/vagrant-nodejs-redis-mongodb

box      = 'ubuntu/trusty64'
hostname = 'emberclibox'
domain   = 'example.com'
ip       = '192.168.42.42'
ram      = '512'

$rootScript = <<SCRIPT
  echo "I am provisioning..."
  add-apt-repository ppa:git-core/ppa
  apt-get update
  apt-get install -y vim git-core curl

  sudo su vagrant -c "wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh"

  source /home/vagrant/.bashrc
  nvm install 0.10
  nvm alias default 0.10

SCRIPT

$buildDepsScript = <<SCRIPT
  source /home/vagrant/.bashrc
  # Install ember-cli + bower
  echo "ember-cli + bower"
  npm install -g ember-cli bower

  cd /home/vagrant
  make refreshdeps
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
  # config.ssh.forward_agent = true

  # http://blog.liip.ch/archive/2012/07/25/vagrant-and-node-js-quick-tip.html
  # config.vm.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "./", "/application"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    vb.customize  [
                    "modifyvm", :id,
                    "--memory", ram
                  ]
  end

  # config.vm.provision "shell", inline: $rootScript
  # config.vm.provision "shell", inline: $buildDepsScript, privileged: false
  #
  # View the documentation for the provider you're using for more
  # information on available options.

  # Enable provisioning with CFEngine. CFEngine Community packages are
  # automatically installed. For example, configure the host as a
  # policy server and optionally a policy file to run:
  #
  # config.vm.provision "cfengine" do |cf|
  #   cf.am_policy_hub = true
  #   # cf.run_file = "motd.cf"
  # end
  #
  # You can also configure and bootstrap a client to an existing
  # policy server:
  #
  # config.vm.provision "cfengine" do |cf|
  #   cf.policy_server_address = "10.0.2.15"
  # end

  # Enable provisioning with Puppet stand alone.  Puppet manifests
  # are contained in a directory path relative to this Vagrantfile.
  # You will need to create the manifests directory and a manifest in
  # the file default.pp in the manifests_path directory.
  #
  # config.vm.provision "puppet" do |puppet|
  #   puppet.manifests_path = "manifests"
  #   puppet.manifest_file  = "default.pp"
  # end
  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "vagrant/puppet/manifests"
    puppet.module_path    = "vagrant/puppet/modules"
    puppet.manifest_file  = "main.pp"
    puppet.options        = [
                              '--verbose',
                              #'--debug',
                            ]
  end

  # Enable provisioning with chef solo, specifying a cookbooks path, roles
  # path, and data_bags path (all relative to this Vagrantfile), and adding
  # some recipes and/or roles.
  #
  # config.vm.provision "chef_solo" do |chef|
  #   chef.cookbooks_path = "../my-recipes/cookbooks"
  #   chef.roles_path = "../my-recipes/roles"
  #   chef.data_bags_path = "../my-recipes/data_bags"
  #   chef.add_recipe "mysql"
  #   chef.add_role "web"
  #
  #   # You may also specify custom JSON attributes:
  #   chef.json = { mysql_password: "foo" }
  # end

  # Enable provisioning with chef server, specifying the chef server URL,
  # and the path to the validation key (relative to this Vagrantfile).
  #
  # The Opscode Platform uses HTTPS. Substitute your organization for
  # ORGNAME in the URL and validation key.
  #
  # If you have your own Chef Server, use the appropriate URL, which may be
  # HTTP instead of HTTPS depending on your configuration. Also change the
  # validation key to validation.pem.
  #
  # config.vm.provision "chef_client" do |chef|
  #   chef.chef_server_url = "https://api.opscode.com/organizations/ORGNAME"
  #   chef.validation_key_path = "ORGNAME-validator.pem"
  # end
  #
  # If you're using the Opscode platform, your validator client is
  # ORGNAME-validator, replacing ORGNAME with your organization name.
  #
  # If you have your own Chef Server, the default validation client name is
  # chef-validator, unless you changed the configuration.
  #
  #   chef.validation_client_name = "ORGNAME-validator"
end
