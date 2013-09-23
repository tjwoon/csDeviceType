// This file is part of csDeviceType.

// csDeviceType is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// csDeviceType is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with csDeviceType.  If not, see <http://www.gnu.org/licenses/>.


// deviceType(tabletSizeCutoff, callback)
// Brain-dead method of detection: Playbook is 'tablet', everything else is 'phone'.
exports.deviceType = function (tabletSizeCutoff, callback)
{
    var isPlaybook =  window.navigator
                   && typeof navigator.userAgent == 'string'
                   && navigator.userAgent.toLowerCase().indexOf('playbook') >= 0
    return isPlaybook ? 'tablet' : 'phone'
}
