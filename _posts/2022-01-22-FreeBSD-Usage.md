---
title: FreeBSD Usage
date: 2022-01-22 09:00:00 -0500
author:
  name: Mateo Ortegon
  link: https://teoo.io
categories: [Usage, FreeBSD]
tags: [freebsd, usage]     # TAG names should always be lowercase
toc: true
math: true
mermaid: true
---

# Auto login on FreeBSD
By default, FreeBSD will prompt for user login after booting up. Since the product sponsor
wants the web UI to be available immediately upon booting the device, we will need
to auto login a user on startup, then use a chron job to tell Xorg to stream firefox
in Kiosk mode into the CLI.

The first step to auto login is to edit the `gettytab` file located at ```/etc/gettytab```.
**Assuming the auto login username is `usr`, run the following commands as root to append
new lines to the ```/etc/gettytab``` file.

```shell
echo "# autologin" >> /etc/gettytab
echo "usr:\" >> /etc/gettytab
echo "        :ht:np:sp#115200:al=usr:" >> /etc/gettytab
```

>**Note:** The console that is seen on the physical display is ```ttyv0```. This console along with any
other virtual ones are defined in ```/etc/ttys```.

Lastly, specify which console the user should auto log in to. For this, edit the `ttys` file in `/etc`. Change `ttyvo`
to specify the login username instead of `Pc`.

```shell
console none                            unknown off secure
#
ttyv0   "/usr/libexec/getty usr"        xterm   onifexists secure
# Virtual terminals
ttyv1   "/usr/libexec/getty Pc"         xterm   onifexists secure
...
```
Now reboot the device and you should automatically be logged into the user specified above
(on 'ttyv0'/the display connected).
