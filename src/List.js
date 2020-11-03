import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    counterReset: 'list',
    marginLeft: ({ adjust }) => `${1.5 + adjust}rem`,
    '& > li': {
      listStyle: 'none',
      position: 'relative'
    },
    '& > li::before': {
      display: 'block',
      position: 'relative',
      left: ({ adjust }) => `-${1.75 + adjust}rem`,
      width: 0,
      height: 0,
      counterIncrement: 'list',
      content: ({ counter }) => counter,
      //
      fontSize: '1.1428571428571428rem',
      fontFamily: '"Times New Roman", serif',
      fontWeight: '400',
      lineHeight: '1.5'
    }
  }
}))

const List = ({ counter = '"(" counter(list, lower-alpha) ") "', adjust = 0, children }) => {
  const classes = useStyles({ counter, adjust })

  return (
    <ol className={classes.root}>
      {children}
    </ol>
  )
}

export default List

Kaneohe
Aiea
Aiea
Aiea
Kailua
Honolulu
Honolulu
Koloa
Honolulu
Honolulu
Honolulu
Honolulu
Waipahu
Wailuku
Kapolei
Ewa Beach
Kaneohe
Honolulu
Hilo
Hilo
Honolulu
Ewa Beach
Eleele
Kailua
Ewa Beach
Ewa Beach
Kapolei
Honolulu
Honolulu
Hilo
Honolulu
Haiku
Kaneohe
Honolulu
Haleiwa
Hana
Hanalei
Hauula
Waipahu
Kaneohe
Wahiawa
Pahoa
Honolulu
Honolulu
Pearl City
Hilo
Hilo
Hilo
Honolulu
Ewa Beach
Holualoa
Captain Cook
Honokaa
Honokaa
Kapolei
Waipahu
Kapolei
Captain Cook
Wailuku
Wahiawa
Ewa Beach
Kailua-Kona
Wahiawa
Ewa Beach
Honolulu
Honolulu
Hilo
Wai'anae
Kaaawa
Honolulu
Wahiawa
Kailua
Honolulu
Kailua-Kona
Honolulu
Kaneohe
Kahuku
Kahuku
Kahului
Kailua
Kailua
Kailua
Ewa Beach
Honolulu
Honolulu
Kailua
Honolulu
Honolulu
Kalaheo
Kailua
Honolulu
Makawao
Honolulu
Papaikou
Waipahu
Honolulu
Honolulu
Honolulu
Honolulu
Waianae
Lihue
Wahiawa
Kihei
Lahaina
Honolulu
Kaneohe
Waipahu
Kamuela
Anahola
Kailua
Kapaa
Kapaa
Kapaa
Honolulu
Hilo
Kapolei
Kapolei
Kapolei
Kapolei
Kaneohe
Pahala
Lihue
Honolulu
Hilo
Lihue
Kaunakakai
Lihue
Honolulu
Hilo
Kaneohe
Kekaha
Kealakekua
Keaau
Keaau
Keaau
Keaau
Kailua-Kona
Kailua-Kona
Kailua-Kona
Hilo
Kekaha
Pukalani
Kailua
Pahoa
Ewa Beach
Kihei
Kihei
Kilauea
Kaunakakai
Kaneohe
Mililani
Kapaau
Kapaau
Kapaau
Honolulu
Koloa
Kealakekua
Kealakekua
Kealakekua
Kealakekua
Pahoa
Kualapuu
Honolulu
Kekaha
Kula
Lahaina
Lahaina
Laie
Lanai City
Honolulu
Laupahoehoe
Pearl City
Waianae
Wahiawa
Kahului
Honolulu
Honolulu
Honolulu
Honolulu
Kihei
Honolulu
Honolulu
Waianae
Waianae
Kapolei
Honolulu
Makawao
Waimanalo
Pearl City
Honolulu
Kahului
Kahului
Kapolei
Maunaloa
Kailua
Honolulu
Mililani
Mililani
Mililani
Mililani
Mililani
Mililani
Honolulu
Honolulu
Honolulu
Kailua
Honolulu
Hoolehua
Hoolehua
Pearl City
Mountain View
Honolulu
Mountain View
Naalehu
Lahaina
Waianae
Waianae
Waianae
Waimea
Honolulu
Honolulu
Honolulu
Honolulu
Kailua
Paauilo
Pahoa
Pahoa
Paia
Pearl City
Honolulu
Kaneohe
Honolulu
Pearl City
Pearl City
Pearl City
Honolulu
Honolulu
Aiea
Ewa Beach
Kahului
Waimanalo
Pukalani
Kaneohe
Wailuku
Honolulu
Honolulu
Honolulu
Honolulu
Honolulu
Honolulu
Aiea
Honolulu
Honolulu
Wahiawa
Honolulu
Haleiwa
Honolulu
Volcano
Honolulu
Wahiawa
Wahiawa
Kaneohe
Hilo
Hilo
Hilo
Hilo
Honolulu
Waialua
Waialua
Waianae
Waianae
Waianae
Pearl City
Wailuku
Waipahu
Honolulu
Waikoloa
Wailuku
Aiea
Waimanalo
Waimea
Kamuela
Waimea
Kamuela
Waipahu
Waipahu
Waipahu
Honolulu
Aiea
Kailua-Kona
Wahiawa
Wahiawa
Lihue
Honolulu
