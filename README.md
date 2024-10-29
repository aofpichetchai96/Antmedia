# Antmedia

***** Uninstall Ant Media *****
#หยุดการทำงานของ Ant Media Server
sudo service antmedia stop
#ลบไดเรกทอรีของ Ant Media Server
sudo rm -rf /usr/local/antmedia/
#ลบไฟล์ Service ของ Ant Media Server
sudo rm /etc/systemd/system/antmedia.service
#รีโหลด systemd
sudo systemctl daemon-reload

==================================================================================

***** Install Ant Media *****
apt update
apt upgrade
reboot

wget https://github.com/ant-media/Ant-Media-Server/releases/download/ams-v2.7.0/ant-media-server-community-2.7.0.zip
wget https://raw.githubusercontent.com/ant-media/Scripts/master/install_ant-media-server.sh && chmod 755 install_ant-media-server.sh
./install_ant-media-server.sh -i ant-media-server-community-2.7.0.zip

==================================================================================

***** telnetd Setting *****
sudo apt show telnetd
sudo apt install telnetd -Y
sudo systemctl status inetd
sudo systemctl start inetd

หากไม่ active
sodo nano /etc/inetd.conf
เพิ่ม
telnet stream tcp nowait root /usr/sbin/in.telnetd in.telnetd
sudo systemctl start inetutils-inetd
sudo systemctl enable inetutils-inetd
sudo systemctl status inetutils-inetd


================================== ifconfig ================================================
sudo apt update
sudo apt install net-tools
ifconfig


============================== install Node ====================================================
1. Installing Node.js with Apt from the Default Repositories
sudo apt update
sudo apt install nodejs
node -v
sudo apt install npm

2. Installing Node.js with Apt Using a NodeSource 
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
nano /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs
node -v

============================== firewall ====================================================
sudo apt update
sudo apt install gufw
search gufw And Open














