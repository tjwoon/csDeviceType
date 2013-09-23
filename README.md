csDeviceType
============

This is a Cordova plugin for figuring out whether the device that Cordova is running on is a
phone-sized device or a tablet-sized device.


License
-------

This library is distributed under the terms of the [LGPL license version 3](https://www.gnu.org/licenses/lgpl.html).


Usage
-----

    window.plugins.deviceType.deviceType(
        tabletCutoffSize, // floating point number - any screen size >= tabletCutoffSize
                          // is considered a tablet.
        function (type) {
            // type == 'phone' || 'tablet'
            // NOTE: 'phone' refers only to the size of the device! Availability of
            // cellular/telephony features is not checked.
        }
    )
