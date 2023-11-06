# RoomGallery - React / JavaScript / jQuery - 3D images slider

RoomGallery is a powerful and versatile 3D image gallery slider for your web application. It provides an immersive experience for displaying images or custom HTML content on virtual gallery walls. With RoomGallery, you can create stunning 3D presentations and galleries with a wide range of customization options.

- Library is free to use as Open Beta

Demo: https://formir.io/room-gallery/

## Features

- 3D Virtual Gallery: Create a virtual 3D gallery space with walls to display your images or HTML content.
- Customizable: Customize the gallery's appearance and behavior using various configuration options.
- Navigation: Navigate through the gallery using arrow buttons, keyboard shortcuts, or swipe gestures.
- Dark Mode: Toggle dark mode for a different viewing experience.
- Zoom Mode: Zoom in and out on images or content.
- Pagination: Add pagination for easy item selection.
- Events: Implement event callbacks to respond to gallery actions.

## Installation

To use RoomGallery in your project, you can install it via npm:

```bash
npm install room-gallery
```

## Usage in React

```javascript
import React from "react";
import { createRoot } from "react-dom/client";
import RoomGallery from "room-gallery";

const dataFetch = async () => {
  const data = await (await fetch("./data.json")).json();
  return data.items;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RoomGallery fetch={dataFetch} styles={{}} settings={{}} />);
```

## ItemType

The `ItemType` is a TypeScript type that defines the structure of the primary data element in your `data.json` file, which is processed by your gallery. It provides a way to specify the properties and their types for individual items in your gallery.

### Properties

- `title` (optional): A string representing the title of the item.
- `description` (optional): A string for a description of the item.
- `descriptionHtml` (optional): A string containing HTML for the item's description.
- `image` (optional): A string or an object representing the image associated with the item. It can include properties like `prompt`, `original`, and `zoom`.
- `html` (optional): A string containing HTML content for the item.
- `video` (optional): A string representing the URL of a video.
- `vimeo` (optional): A string representing the URL of a Vimeo video.
- `youtube` (optional): A string representing the URL of a YouTube video.
- `width` (optional): A string with the item's width in the format of a number followed by a unit (e.g., "200px").
- `height` (optional): A string with the item's height in the format of a number followed by a unit (e.g., "150px").

This type provides the structure for defining various properties for each item within your gallery's data. You can customize the properties based on the specific data you want to associate with each item.

## Sample of josn data

```json
{
  "items": [
    {
      "image": "formir-room-thumb.png",
      "title": "The Room Gallery - React & jQuery plugin",
      "description": "Provided to you in Open Beta during testing and development process.",
      "height": "280px",
      "width": "280px"
    },
    {
      "image": "formir-500.png",
      "descriptionHtml": "<p style='margin: 0 0 10px'>Use for free: <a href='https://github.com/formir/room-react/'>Documentation</a></p><p style='margin: 0'></p><p style='font-size: 0.9rem; margin: 30px 0 10px'>Help with testing and improve:<br/><a href='https://github.com/formir/room-react/issues'>Report issue</a></p>",
      "height": "200px",
      "width": "200px"
    },
    {
      "image": {
        "prompt": "https://picsum.photos/id/239/600/400",
        "original": "https://picsum.photos/id/239/1200/800",
        "zoom": "https://picsum.photos/id/239/2400/1600"
      },
      "description": "Nullam placerat odio eget purus rhoncus, eget eleifend augue congue."
    },
    {
      "image": {
        "prompt": "https://picsum.photos/id/240/600/400",
        "original": "https://picsum.photos/id/240/1200/800",
        "zoom": "https://picsum.photos/id/240/2400/1600"
      },
      "description": "Nam vitae sem a arcu sodales rhoncus quis vel mi."
    }
  ]
}
```

## Interface: RoomGalleryProps

### `fetch?: () => Promise<Array<ItemType>> | any | string`

This optional property defines a function for fetching data, which is expected to return a promise that resolves to an array of `ItemType`, or it can return any other data type, such as a string. Use this function to load items dynamically. It can be used to populate the gallery with data. If not provided, the gallery may rely on the `items` property for static content.

### `items?: (ItemType[] | HTMLElement[])`

An array of `ItemType` objects or HTMLElements representing the items in the room gallery. These items can be static content or can be preloaded for display within the gallery. If the `fetch` function is provided, it may override this static data.

### `styles?: object`

An optional object that allows you to define custom styles for the room gallery. You can provide CSS styles using this property to customize the appearance of the gallery.

### `children?: JSX.Element[] | JSX.Element`

This property allows you to pass JSX elements as children to the room gallery. It can be used to add additional content or components within the gallery.

### `settings?: RoomGallerySettingsType`

An object that holds various settings for configuring the behavior and appearance of the room gallery. This can include options such as enabling/disabling features, adjusting layout, and more.

### `ref?: Ref<HTMLDivElement>`

An optional reference to the HTML `<div>` element that represents the room gallery. This can be used to access and manipulate the gallery's DOM element directly. This reference can be passed to other parts of your application as needed.

### you can also use children as node:

```javascript
<RoomGallery styles={{}} settings={{}}>
  <div>
    <div className="item-image">
      <img src="url">
    </div>
    <div className="item-desc">
      <p>Title</p>
      <span>Description</span>
    </div>
  </div>
  <div>
    <div className="item-image">
      <img src="url">
    </div>
    <div className="item-desc">
      <p>Title</p>
      <span>Description</span>
    </div>
  </div>
</RoomGallery>
```

## Usage Vanilla JavaScript

```javascript
import RoomGallery from 'room-gallery/dist'

const options = {
  element: document.getElementById('root'), // element in DOM to render gallery
  items: [{image: 'url', title: 'title', description: 'description'}], // optional items
  fetch: '//fetch-url' // optional fetch url or promise method
  styles: {},
  setting: {}

}
const room = new RoomGallery(options) // gallery will init by default
room.gotoNextItem() // use method to go to next

```

## Methods on object

### `gotoNextItem(): void`

This method allows you to navigate to the next item in the room gallery.

### `gotoPrevItem(): void`

Use this method to navigate to the previous item in the room gallery.

### `toggleDarkMode(): void`

This method toggles the dark mode in the room gallery.

### `setDarkMode(mode: boolean): void`

You can use this method to set the dark mode in the room gallery by providing a boolean `mode` as a parameter.

### `toggleZoom(): void`

This method toggles the zoom feature in the room gallery.

### `setZoom(zoom: boolean): void`

To set the zoom feature in the room gallery, use this method with a boolean `zoom` as a parameter.

### `getCurrentItem(): {} | void`

This method returns the current item in the room gallery.

## Usage with jQuery

```html
<head>
  <script
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous"
  ></script>
  <script defer="defer" src="jQueryRoomGallery.js"></script>
  <script defer="defer" src="RoomGallery.js"></script>
  <link href="RoomGallery.css" rel="stylesheet" />
</head>
```

```html
<body>
  <img src="url" title="Some title" alt="Some description" />
  <img src="url" title="Some title" alt="Some description" />
  <img src="url" title="Some title" alt="Some description" />
  <div id="room-gallery"></div>
</body>
```

### Find images on page and give element

```javascript
$('img').RoomGallery({element: $('#room-gallery').get(0), styles:{} settings:{}})
```

### Find element and give images

```javascript
$('#room-gallery').RoomGallery({items: $('img'), styles:{} settings:{}})
$('#room-gallery').data('RommGallery') // will give you access for control method and state
```

## RoomGallery Settings

The `settings` type allows you to configure various aspects of your RoomGallery. It includes the following configuration options:

- `arrowNav`: Defines how arrow navigation is displayed. Options are:

  - `'number'`: Display the item number (e.g., 1 of 10).
  - `'icon'`: Use arrow icons for navigation.
  - `'blank'`: Display nothing.
  - `'disabled'`: Disable arrow navigation.

- `darkNav`: Specifies how dark mode navigation is displayed. Options are:

  - `'button'`: Use a button for toggling dark mode.
  - `'icon'`: Use an icon for toggling dark mode.

- `zoomNav`: Specifies how zoom mode navigation is displayed. Options are:

  - `'button'`: Use a button for toggling zoom mode.
  - `'icon'`: Use an icon for toggling zoom mode.

- `darkMode`: Defines the initial dark mode behavior. Options are:

  - `'dark'`: Start with dark mode enabled.
  - `'light'`: Start with dark mode disabled.
  - `'manual'`: Enable or disable dark mode manually.
  - `'auto'`: Automatically switch between dark and light modes based on user preferences.

- `zoomMode`: Specifies the initial zoom mode behavior. Options are:

  - `'in'`: Start with zoom mode enabled.
  - `'out'`: Start with zoom mode disabled.
  - `'manual'`: Enable or disable zoom mode manually.
  - `'disabled'`: Disable zoom mode.

- `paginationsNav`: Defines how pagination navigation is displayed. Options are:

  - `'button'`: Use button-style pagination.
  - `'text'`: Use text-based pagination.

- `paginations`: Specifies how paginations are displayed. Options are:

  - `'number'`: Display item numbers.
  - `'blank'`: Display nothing.
  - `'disabled'`: Disable pagination.

- `paginationsOnZoom`: Controls whether paginations are hidden when zoomed. Options are:

  - `'show'`: Paginations remain visible when zoomed.
  - `'hide'`: Hide paginations when zoomed.

- `arrowNavOnZoom`: Specifies whether arrow navigation is hidden when zoomed. Options are:

  - `'show'`: Arrow navigation is visible when zoomed.
  - `'hide'`: Hide arrow navigation when zoomed.

- `defaultPosition`: Sets the default position for the gallery.

- `icons`: Allows you to customize the icons used for navigation.

- `swipeToNav`: Enables or disables swipe gestures for item navigation.

- `swipeToZoom`: Enables or disables swipe gestures for zooming.

- `keypressToNav`: Allows arrow key presses for item navigation.

- `keypressToZoom`: Allows arrow key presses for zooming.

- `animationSpeed`: Specifies the animation speed (in seconds)

  - `'min'`: Represents the time it takes to animate between switched walls. Default 2s.
  - `'ratio'`: Is the distance multiplier between the walls being switched. Default 1.

- `event`: Configures event callbacks for various gallery actions, such as initialization, rendering, showing next/previous items, toggling dark mode, zooming, and more.

### Event Callbacks

The `event` property within the `settings` type allows you to define various event callbacks that get triggered during different actions in your RoomGallery. These event callbacks can be used to add custom behavior or handle specific actions. Here are the available event callbacks:

- `onInit(value?: object)`: This callback is invoked when the RoomGallery is initialized. You can perform any initialization tasks or setup actions here.

- `onRender(value?: object)`: Triggered when the RoomGallery is rendered. You can use this callback to perform actions after the gallery is rendered.

- `onShowNext(value?: object)`: Called when the user navigates to the next item. You can use this callback to add custom behavior when showing the next item.

- `onShowPrev(value?: object)`: Invoked when the user navigates to the previous item. Use this callback to add custom behavior when showing the previous item.

- `onZoomIn(value?: object)`: Triggered when the user zooms in. You can use this callback to perform actions when the gallery zooms in.

- `onZoomOut(value?: object)`: Called when the user zooms out. You can use this callback to perform actions when the gallery zooms out.

- `onDarkModeOn(value?: object)`: This callback is invoked when dark mode is turned on. You can use this callback to handle actions specific to enabling dark mode.

- `onDarkModeOff(value?: object)`: Called when dark mode is turned off. You can use this callback to handle actions specific to disabling dark mode.

### StylesVariables Enum

The `styles` provides a set of predefined CSS variables used to style your RoomGallery. These variables can be customized to control the visual appearance of your gallery. Here are the available variables:

#### Core Room Styles:

- `rotateSpeed`: Rotation speed in degrees per second.
- `rotateTiming`: Timing function for rotation animation.
- `fontFamily`: Font family for text content.
- `perspective`: Perspective value for 3D transformation.
- `mobileSizeWidth`: Width of the mobile viewport.
- `mobileSizeHeight`: Height of the mobile viewport.
- `mobilePerspective`: Perspective value for mobile view.
- `scale`: Scaling factor for elements.
- `scaleZoom`: Scaling factor for zoomed elements.
- `offsetY`: Vertical offset for elements in percentage.
- `itemHeight`: Height of items in the room.
- `itemWidth`: Width of items in the room.
- `zIndex`: Z-index for elements in the room.
- `textFontSize`: Font size for text content.
- `textFontSizeMobile`: Font size for text content on mobile devices.
- `fontLineHeight`: Line height for text content.
- `textMarginTop`: Margin top for text content.
- `textMaxHeight`: Maximum height for text content.
- `textMinHeight`: Minimum height for text content.
- `textMaxWidth`: Maximum width for text content.
- `textPadding`: Padding for text content.
- `navigationsMargin`: Margin for navigational elements.
- `buttonSize`: Size of buttons.
- `paginationButtonSize`: Size of pagination buttons.
- `paginationButtonsSpace`: Space between pagination buttons.
- `navButtonSize`: Size of navigation buttons.
- `buttonsPosition`: Position of buttons.
- `buttonZoomPosition`: Position of zoom button.
- `buttonDarkPosition`: Position of dark button.
- `buttonZoomWidth`: Width of zoom button.
- `buttonExitWidth`: Width of exit button.
- `buttonDarkWidth`: Width of dark button.
- `paginationPosition`: Position of pagination elements.
- `buttonTransition`: Transition effect for buttons.
- `buttonOpacity`: Opacity value for buttons.

#### Light Room Styles:

- `lightRoomBackgroundBlendMode`
- `lightRoomBodyBackground`
- `lightRoomTypeextColor`
- `lightRoomFloorBackground`
- `lightRoomFloorShadow`
- `lightRoomWallBackground`
- `lightRoomWallShadow`
- `lightRoomCeilBackground`
- `lightRoomCeilShadow`
- `lightRoomButtonBackground`
- `lightRoomButtonColor`
- `lightRoomButtonBorder`
- `lightRoomButtonShadow`
- `lightRoomButtonCurrentBackground`
- `lightRoomButtonCurrentBorder`
- `lightRoomButtonCurrentColor`
- `lightRoomButtonCurrentShadow`
- `lightRoomCanvasBorder`
- `lightRoomCanvasShadow`

#### Dark Room Styles:

- `darkRoomBackgroundBlendMode`
- `darkRoomBodyBackground`
- `darkRoomTypeextColor`
- `darkRoomFloorBackground`
- `darkRoomFloorShadow`
- `darkRoomWallBackground`
- `darkRoomWallShadow`
- `darkRoomCeilBackground`
- `darkRoomCeilShadow`
- `darkRoomButtonBackground`
- `darkRoomButtonColor`
- `darkRoomButtonBorder`
- `darkRoomButtonShadow`
- `darkRoomButtonCurrentBackground`
- `darkRoomButtonCurrentBorder`
- `darkRoomButtonCurrentColor`
- `darkRoomButtonCurrentShadow`
- `darkRoomCanvasBorder`
- `darkRoomCanvasShadow`

These CSS variables allow you to control the styling of various components and elements within your RoomGallery. You can override these variables to create a custom look and feel for your gallery.

### Core Setup in Sass (src/sass/room-gallery.scss)

- `$room-size-width`: Default width of room gallery - 100vmax
- `$room-size-height`: Default height of gallery - 100vmin
- `$room-mobile-media-width`: Mobile breakpoint - 945px (Do not use % unit or calc(). You can use px, rem, cm, vh, vw, etc.)
- `$room-mobile-size-width`: Mobile width of gallery after mobile breakpoint - 100vw (Do not use % unit or calc(). Recommended 100vw)
- `$room-mobile-size-height`: Mobile height of gallery after mobile breakpoint - 100vh (Recommended 100vh)
