# -*- Mode: Python; coding: utf-8; indent-tabs-mode: nil; tab-width: 4 -*-
### BEGIN LICENSE
# This file is in the public domain
### END LICENSE

from lib.HTMLWindow import HTMLWindow
from gi.repository import Gtk

class MyWindow(HTMLWindow):

    def __init__(self):
        super(MyWindow, self).__init__(900, 600)
        self.view.get_settings().set_property("enable-universal-access-from-file-uris", True)
        self.set_position(Gtk.WindowPosition.CENTER)

    def on_html_message(self, signal_name, data):
        print "signal received from frontend: %(signal)s, with this data: %(data)s" % {'signal': signal_name, 'data': data}

        if signal_name == 'frontend_loaded':
            version = 'Unknown OS'
            for line in open('/etc/lsb-release'):
                if 'DISTRIB_DESCRIPTION' in line:
                    version = line.replace('DISTRIB_DESCRIPTION=', '')[1:-2]
            self.send_html_message('version_provided', {"version": "%s %s" % (data, version)})
