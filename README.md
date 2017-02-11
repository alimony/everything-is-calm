Everything is Calm
------------------

Chrome Extension that invisibly lowers the volume of YouTube videos over time,
until the last twenty seconds when it blasts back at max, hopefully after the
user has continuously increased the volume on their external unit to compensate
for it being 'too low'.

Built at the [Swedish edition](https://www.stupidhackathon.se) of
[Stupid Hackathon](https://stupidhackathon.com)

February 11, 2017


## How to use

1. On your desired target's computer, install the extension in Chrome by
   visiting `chrome://extensions` and dragging the file `everything-is-calm.crx`
   to the browser window, then confirm installation in the following popup.
2. That's it. Any time they visit a video on `youtube.com` it will be in action.


## Building a new version of the extension

To build a new version you need the private key used to build it in the first
place. Once you have that, you can run the following (on a Mac, or the
equivalent on your platform):

    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=/path/to/repo/everything-is-calm --pack-extension-key=/path/to/private/key.pem

This will place a new file called `everything-is-calm.crx` ready to install.
