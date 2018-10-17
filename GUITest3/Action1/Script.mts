SystemUtil.Run "C:\Program Files\PuTTY\putty.exe"

Window("PuTTY Configuration").WinEdit("Host Name (or IP address)").Set "devops.verizon.com" @@ hightlight id_;_920844_;_script infofile_;_ZIP::ssf1.xml_;_
Window("PuTTY Configuration").WinEdit("Host Name (or IP address)").Type  micReturn @@ hightlight id_;_920844_;_script infofile_;_ZIP::ssf2.xml_;_

Window("PuTTY").Type "root" + micReturn  @@ hightlight id_;_1119214_;_script infofile_;_ZIP::ssf5.xml_;_
Window("PuTTY").Type "admin" + micReturn 

wait (3)

Window("root@localhost:~").Restore
Window("root@localhost:~").Type "ifconfig" + micReturn @@ hightlight id_;_922714_;_script infofile_;_ZIP::ssf10.xml_;_
Window("root@localhost:~").Type "exit" + micReturn
