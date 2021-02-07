import React from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
//import { GoogleMap, useLoadScript } from "@react-google-maps/api";
//import mapStyles from "./mapUtils/mapStyles";

const MapButton = () => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#388e3c',
            },
            secondary: {
                light: '#0066ff',
                main: '#d32f2f',
                contrastText: '#ffcc00',
            }
        }
    });

    // const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:プログラミング';

    // // 現在地を取得するときのオプション
    // const option = {
    //     enableHighAccuracy: true,
    //     maximumAge: 20000,
    //     timeout: 100000000
    // };



    // axios
    //     .get('https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AiGc_1SRww-x3-z5vKoqgE_Yi7qcd02yDiMBRiKcTExnPru8TNzPWehNjMm8T_06')

    // // 現在地の取得に成功したときの関数
    // function showPosition(position) {
    //     const lat = position.coords.latitude;
    //     const lng = position.coords.longitude;
    //     console.log(lat, lng);
    // }
    // // 現在位置の取得に失敗したの実行する関数
    // function showError(error) {
    //     let e = "";
    //     if (error.code === 1) {
    //         e = "位置情報が許可されてません";
    //     }
    //     if (error.code === 2) {
    //         e = "現在位置を特定できません";
    //     }
    //     if (error.code === 3) {
    //         e = "位置情報を取得する前にタイムアウトになりました";
    //     }
    //     alert("error：" + e);
    // }
    // navigator.geolocation.getCurrentPosition(showPosition, showError, option);

    //↑↑位置情報取得のみ

    //↓↓GoogleMap

    // const libraries = ["places"];
    // const mapContainerStyle = {
    //     height: "60vh",
    //     width: "100%",
    // };
    // // 地図の大きさを指定します。

    // const options = {
    //     styles: mapStyles,
    //     disableDefaultUI: true,
    //     // デフォルトUI（衛星写真オプションなど）をキャンセルします。
    //     zoomControl: true,
    // };

    // function Map() {

    //     const { isLoaded, loadError } = useLoadScript({
    //         googleMapsApiKey: 'AIzaSyDWJh5mvrSIqrX52oYst1p - mQ2PmKXRtSY',
    //         // ここにAPIキーを入力します。今回は.envに保存しています。
    //         libraries,
    //     });

    //     const mapRef = useRef();
    //     const onMapLoad = useCallback((map) => {
    //         mapRef.current = map;
    //     }, []);
    //     //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

    //     if (loadError) return "Error";
    //     if (!isLoaded) return "Loading...";

    //     return (
    //         <GoogleMap
    //             id="map"
    //             mapContainerStyle={mapContainerStyle}
    //             zoom={8}
    //             // デフォルトズーム倍率を指定します。
    //             center={{
    //                 lat: 43.048225,
    //                 lng: 141.49701,
    //             }}
    //             // 札幌周辺にデフォルトのセンターを指定しました。
    //             options={options}
    //             onLoad={onMapLoad}
    //         >
    //         </GoogleMap>
    //     );
    // }






    return (
        <ThemeProvider theme={theme}>
            <IconButton color="secondary"
            // onClick={() => {
            //     MapButton();
            // }}
            >

                <AddLocationIcon />
            </IconButton>
        </ThemeProvider>
    )

};

export default MapButton