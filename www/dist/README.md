# JM's Earthbound Backgrounds

Note! If using with Yanfly Battle Core, remember to include this *after* Battle Core.

## Folder & file format

- ebb/
    - &lt;config file should go here&gt;
- img/
    - ebattlebacks/
        - palettes/
            - &lt;palette images here&gt;
        - patterns/
            - &lt;pattern images here&gt;
- the rest of your game....

Patterns should be grayscale images, where the colors are evenly distributed between black and white.

Palettes should be nx1 images where (0, 0) is pure black. n is the number of colors used in the corresponding pattern.

## Config file format

You must have a config file, and it has the following format (as a Hjson object)

- layers: A list of the various images to combine
    - image: The name of the image in "img/ebattlebacks/palettes/" and "img/ebattlebacks/patterns/" without the ".png" extension. Required.
    - image_mode: Required. Valid values are:
        - "tiled": the image will be tiled to fit the screen.
        - "stretched": the image will be stretched to fit the screen
    - effect: an optional object. Describes how the image changes over time (if it does)
        - type: Valid values are:
            - "none": the same as if you hadn't included the "effect" object. Does nothing.
            - "horizontal": waves side to side horizontally
            - "horizontal_interlaced": every row waves horizontally in opposite directions
            - "vertical": the images stretches and compresses vertically
        - amplitude: Describes how strong the effect is. Should never be larger than the image size
        - frequency: Describes how "effective" the effect is. Try it out. It's a bit hard to describe.
    - palette_shift: If present and greater than 0, specifies the number of frames to wait before shifting color in the palette.
    - scroll: if present, a length 2 array, specifing how much to scroll in x then y directions per frame.
- configurations: Combinations of layers that form a background. Is an object, and the key names are the desired name for the configuration.
    - Array format: value is just a length 2 or 3 array, the first 2 numbers specifying the indicies of the desired layers from the layers array. 
    Speed defaults to 1 unless the third number is specified.
    - Object format:
        - layers: A length 2 array, specifying the indicies of the desired layers from the layers array.
        - speed: The desired speed of the layers' animation, where 1 is the baseline. Experiment with this.

An example configuration is included at `ebb/jm_ebb_example.hjson`.

## Additional features

### Troop tagging

As troops don't have a notes field, it's impossible to tag them the traditional way, but by adding something in the format of:

```
[EBB: <configuration name>]
```

to the troop name, you can target a specific configuration for your troop without messing with commands or JavaScript!

## JS interface

#### JM_EBB.enabled(enable)

Command form: EarthboundBackgrunds enabled? &lt;enabled&gt;

Enable (or disable) the backgrounds.

#### JM_EBB.setConfiguration(to)

Command form: EarthboundBackgrounds setConfiguration &lt;to&gt;

If in battle, directly sets the configuration to the named configuration. Else, set the next battle's configuration to the named configuration.

#### JM_EBB.setNextConfiguration(to)

Command form: EarthboundBackgrounds setNextConfiguration &lt;to&gt;

Set the next battle's configuration to the named configuration.

#### JM_EBB.setDefaultConfiguration

Command form: EarthboundBackgrounds setDefaultConfiguration

Set the default configuration using setConfiguration internally.

Note: called at the beginning of every battle, unless there is a next configuration specified.

#### JM_EBB.setLetterboxVisible(visible)

Command form: EarthboundBackgrounds setLetterboxVisisble &lt;visible&gt;

Sets whether the letterbox is visible or not.

#### JM_EBB.getConfigurations

Command form: N/A

Get a list of configurations available.

### JM_EBB.getConfiguration

Command form: N/A

If there is a next configuration set, gets that, otherwise get the configuration currently in use.
