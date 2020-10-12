# ECO League Overlay

Dynamic League of Legends Spectator Overlay, written in React

*pls also view the [serverless variant](https://github.com/finncyr/ECO_LoL_Overlay_serverless) of this overlay*
*it's much faster, editable directly in OBS and features some more details*

## Installation

```
npm install
```

## Usage

1. Execute the following command and keep the terminal open

```
npm start
```

2. Integrate the adress `http://localhost:3000` as a browser source in OBS
3. Change Game State in `src/GameData.json` dynamically

## Shutdown

To shutdown the Overlay simply kill the Terminal Window with `Ctrl + C` or by killing the Window

## Roadmap

- Integrate Baron / Drake Timers
- Electron App to change Values
- Dynamic Space for Sponsoring Displays
