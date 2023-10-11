# RoomGallery - React / JavaScript / jQuery - 3D images slider

RoomGallery is a powerful and versatile 3D image gallery slider for your web application. It provides an immersive experience for displaying images or custom HTML content on virtual gallery walls. With RoomGallery, you can create stunning 3D presentations and galleries with a wide range of customization options.

- Library is free to use as Open Beta

![RoomGallery Example](https://formir.io/room-react/)

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
import { ReactRoomGallery as RoomGallery } from "room-gallery";

const dataFetch = async () => {
  const data = await (await fetch("./data.json")).json();
  return data.items;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RoomGallery fetch={dataFetch} styles={{}} settings={{}} />);
```

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
import RoomGallery  from 'room-gallery'

const options = {
  element: document.getElementById('root'),
  items: [{image: 'url', title: 'title', description: 'description'}], // optional items
  fetch: '//fetch-url' // optional fetch url or promise method
  styles: {},
  setting: {}

}
const room = new RoomGallery(options) // gallery will init by default
room.gotoNextItem()

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
$('#room-gallery').initRoomGallery // will give you access for control method and state
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
