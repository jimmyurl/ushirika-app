import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample event data with Tanzanian coffee cooperative events
  const events = [
    {
      id: 1,
      title: "Uzinduzi wa Miradi Inayotekelezwa Kwa Pesa za Ruzuku",
      date: "March 15, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Kayanga, Karagwe",
      description: "Dkt. Ndiege amezindua na kugawa vitendea kazi ikiwa ni pamoja na Pikipiki 23  zilizogharimu Shilingi 64,400,000, Vishikwambi 40 vyenye thamani ya shilingi  37,600,000, Ununuzi wa mashuka 500 kwa ajili ya wodi ya kina mama iliyoghalimu Shilingi 11,720,650, Mtaji anzia wa SACCOS 150,000,000 na Mgao wa Vyama vya Msingi kwa ajili ya kuboresha miundo mbinu kwa kiasi cha shilingi  225,000,000.Dkt. Ndiege amefanya uzinduzi huo leo tarehe 24 Novemba, 2023 Mjini Karagwe, ikiwemo kuzindua wa Mradi wa ujenzi wa uzio na bweni  kwa Shule ya Sekondari Nyaishozi  inayomilikiwa na  Chama Kikuu Ushirika cha Karagwe KDCU utakaogharimu shilingi  million 700 na mradi  wa Kisima  cha Maji katika ofisi ya KDCU ulioghalimu Shilingi millioni 13.",
      attendees: 850,
      type: "festival",
      year: "2024",
      gallery: [
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475475766_919074050397067_7575456241917316016_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rL7-s8qdIsEQ7kNvwG7ZY1D&_nc_oc=AdkzC-Cdjau1nPM7gEzM1NAI00Iys01b92-pzFHAnbhzXl5VJ9VFTSI2K1mmr-iQ8i8&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=kkg_k5VS7WMNTutOEz-eZA&oh=00_AfQLCB3AImlEwo63ilT0mV7pimaKXTmpkNmhFwoncLPCJg&oe=687546D5",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475541255_919074097063729_3899909487665569683_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AT73Ex3kjRMQ7kNvwFdpA1o&_nc_oc=AdnNVJx3KBJoXRwOGbjeUx7RAQomE1U4YKwkr4UbEjYqpdicDTBspX34YCMP9f-9TxM&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=5GdgUzmHYFExzCBqXb4J2g&oh=00_AfTLtmuSjFPZ7LXnRKpSFXp6DGthUgY5kBUJUtuLM5-j_A&oe=68753E48",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475699928_919074490397023_3019269991277621056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dOZuAUnqkv8Q7kNvwFk60lt&_nc_oc=Adm7o01hDXjC_CEJMV8-Rfc8BDDrBloB6N_7CRH1DC_8Etwj6q6jQVBD9BK1L3cRbgo&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=JARGnzLtp4-KMiCztK9Yew&oh=00_AfSY9Uh73RViclVPrt_0RLxy0X6NVq5LAO41_zrgTwIhrQ&oe=68753E6D",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475891546_919074520397020_1666435114086418688_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nnFPYgsJBBUQ7kNvwEwH7MG&_nc_oc=AdnXupPhabh73cjIqnFKAm_cP18WRYvrj2FyOZ4gh8RHA3CCGrGSedbt35j8BnrIZbY&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=-QIY1EmmytZvHy1kn1ISPw&oh=00_AfTyNIr7qBozhoU1gUnT8U0BnsA2JdsW8B6uXCz1rWobCg&oe=6875348F"
      ]
    },
    {
      id: 2,
      title: "Mafunzo ya Kilimo Endelevu - Sustainable Farming Workshop",
      date: "April 22, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Bukoba, Kagera",
      description: "Educational workshop on sustainable farming practices, soil conservation, and organic certification processes for our member cooperatives.",
      attendees: 320,
      type: "workshop",
      year: "2024",
      gallery: [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Mkutano Mkuu wa Washirika - Annual Cooperative Members Meeting",
      date: "May 10, 2024",
      time: "1:00 PM - 7:00 PM",
      location: "Kayanga Conference Hall",
      description: "Annual general meeting discussing cooperative growth, market opportunities, member benefits, and strategic planning for the next fiscal year.",
      attendees: 480,
      type: "meeting",
      year: "2024",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "KDCU Ltd yatumia shilingi milioni 500 ujenzi wa ghala Karagwe",
      date: "June 5, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "KDCU Processing Plant, Kayanga",
      description: "Celebrating farmers who achieved organic and 4C certification with awards and recognition. Showcasing our commitment to quality coffee production.",
      attendees: 280,
      type: "ceremony",
      year: "2024",
      gallery: [
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBcYGBgXGB0aGRodFxoXFxgYGh0aICgiGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0uLS0vLy0tLS0tLS0tLS0tNS0tLS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAIHAf/EAEQQAAECAwQHBQUFBwMEAwAAAAECEQADIQQSMUEFIlFhcYGRBjKhsdETQlLB8BQjYnLhFUNTgpKi8bLC0jNjg+IWNXP/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMREAAgIBAwIEBAYCAwEAAAAAAQIAAxEEITESQRMiUZEFYXGxMoGhwdHwQuEUYvEz/9oADAMBAAIRAxEAPwArtLo8KnyyoVVKUKUDyljxaaOkJZ9klpNX5kxZ+2A+5RNBa4sEkYtMSUnEfFc6Rz612pZPeePJ6LqdF324/v5Q+rTzmW7R9jsp7yS+28YcytA2RQcJ8Y53ZbfMTgeoh3YtPTE5DlSNDomDqKrQcgy3y9BWYfu0nlEp0RZz+6T0hTZdPA4pP9R9YNTpUHLxMTtM9vGhSNE2cfukdPWBrTLsKe+mUPPoI0maSkCqhL4kJ+caJ09Zx3Ug/lQT4gNHZE4Cw+sGmaQsn7mxmcfwop1qfCF02xWuafu7KJSdhSHHOY3lFh/bE5XckqbaQT0CQR1IjFm1LFQUvmVJQOiFFQ5KERiMLZ084/M5lam9k1jWtE6Wh8HJUo/lQBrcAYFtdglSxRMxf4phEpHEITrkcVCHtqky5TqmTkpJxui8o9Wc/mBMV7SOmAKykXf+7N1lv+EMwPBL8IkKY3Vez8b/AKCK7ZIUA7JQ4cUCXG0ZkfiNN8L0FKXapzUcB8yYyfNUskqJJNSSaneTlzJMSyZGBNBkB8t2+DYxNJQcbyK4TuHvKPl/j1hjo+xFeAN3Mmj8fhG7/AksFi9oQVvcGCRmch+sXKyyEyUgrABxTLGW87TvPiYT1WrFYwNzGqaC+52EzRGiEoukpF5TABqnAYe6nCnB6szG1WcfaJkos4ptSWALeMZo0Lv+2XQjujZs4NEhnn2oU2Kg5J24/W+MF7SxJO59fSaSJ08DaJrVoeUTVFxW1NB6coBm6EUn8Q2gVHFPo8XLSUkOC4IOH6xDIlDMeo4HMbjF01tid8/WBt0qOMge0pU7s8spviWVo+KXrAZ6wFU/zAQsNiPuq+vLwjp0tYSq8CxHvJoeYz8RGulUInJJVZ5U1TUUFGWo/wAycedIfp+Io2zbfaZz0OvG85h7FY90Hk3imvhEsq0EUunkAfAV6wxtSTLLLQpBcslWLblYK5CI7yFZg8Y0A4YZgPMIMm1E4KQ+whQPgph0j1Zm5BJ4EHzEEKsiSPojoXEafs74T0JHqPCOGJ3iQJVonDFA5pEeDSKxjLHT0g0yZycCW3h/FJ/2xp9oVgqWFflIJ6Fj4RbA+U7q+UiGkznKHQxKjS6c0p6frGfapWCklB3gp+USITKVhMV1fzeOx8pxI7iSI0oj4U9P1iQaRTsHT9Yj/ZqTgsc0J+QEYdDHbLP8pHkqIwsrlJONIjZ/b+sbDSO4dP1gX9jrHuIP86h6x4dGL/gnlM9RHdKzsrG1m0mn35IWPzFPlDORpmxe/ZFDhMKvMiKr9iUMZU4cJiTGewAxTaPA/KBtSp9ff/csHUf+S7y9N6N/gLHFIP8AvMEI09o3+GBxlRQmQMTPHFMZfk/xJvhAzpFPc+8t4o9P0lw0wAqyzUF3CCRmHSb48QBHLrdN1qMPGOsBDgg5gjrSOVaSklK1J2GE/hTfiWaOqXgwVNpIyT09Inl27ahPK96wNd3RKhO7xjZ2me6AxrZbZLOKDyJ9YsmjZFkWNZL8VP5RTEJAzbxgyRbAnBURgTNuoJ/DmdAk2OypqmUnp/yMSq0hLR3QlPBvlFFl6TUogBTb1UHg8MbNZEqP3k7kj1J+USqE8RGygf5H7mO7R2hyTU9P8QH9rnTcy34fmT+m4xBOt9jkCjKIy7x5jug8WhFpTtJMnC7KBQjBwa9chuHWCeEBux9pWuh2OK0/NuPbvJ9LT0S3AIK/6rv5jt3B8KtFdKlLVmo7T9UG4eETS7K7XjwA+QzhlJsKhTuDZio8APm0CexEm7p9OQMcn1/vEBk2cDGp8B+sMbHYCshgS/jDKw6HBDlkpGJUfM/IQ3kI1Wl6iM5hopX5R7o3xn363snvNKrS75aRWSQJRuoAXO/tRvP1+p0mSlBKlm8vEk5enHpC3SOlJchBY3R/co+Z+sopOmNNTJ5Ykpl5J271NifrfC1OlsvOeB6xtnWuXvSHbaRJBTLT7eZlVpSeJxUeHURR53aK1Kme09soKxATRA3XcDzcwpSSSABjQAYngIt/ZzsgVgqtF5FCAgMCAR31GrZi6R6DQFGm0iZb9dyYHqstbaE2Dt0VAItCW/GjDiU5cugiy2a3sAoG/LOCgXb1iiaZ7JTZNZZ9qmpZmWBw94cOkLNF6XmWdToOqcUnumF30NNy9VB/L+8S4tdDh515kzA4qN2I+YMAWpZkaxmAJ/EQPPHlCTRnaCUtJWhVxaQ5Qc9ydvA7coSaRta58y+upwAagGwDIQjToXLkNsBClgwyJdJOmZM3UKpan90kEHlC+3dnZS6yz7M7MU9MRyMIpVjCgzOcmxEWTR1+5UkkUJ8n9YLZp2069dTHEGVDHDCV61aNtEmpBI2pLjnmOYiKVpE5gHwi4y522IbRo6TMqpAf4k6p8MecXr+IdrB+YgH0aniV+Tb07SOOHhBImJViAodfCNrV2ZLn2UwHcqh6jHoIV2iwzZVVoUB8WKeopDtd9Vn4Wib6RhGYky8HKdz06GkRTNDoVkk/yseqW8oBk2xQzcQQi27QOVIPvFzW68TRWh1J7pWPyrBHRTGIlS5ycJg/nQU+LEeMM5dtG082PpBKLTvHiPOkWDGULMORE8m3Wke4lY/AoH5nyidOnyn/AKkpaeXq0MlS0qqUBW+6FeIjxMqXkVJ3BRA6GnhE5HpK9S+kgldoZCsSRy9INRpKScJiearv+oQOqwpViQr88tJ8gCYiOhpZ9xH8qlI+ZjsCR5Y0ROBwZXAgxLePwHpCNegU5BY4KSoeIBjT9iEYTFj/AMb+SonAkdK+suSYoXamwj2yyFAKxANHDFRIO1yBzi+lLGK12suoUmYtAWClm2McfFMef+FMBfg9wZv60N4RK8ic/VESjBdqUFKJQm6Njv0eIRJOagI9DkCIg5EiSIlSoCNjKQMVE84xA+BJ8hHdUoVzJErOzrGky1ZO/l+sTytFzFnWcDYKDqYZ2fQyU447vU16QJr0XkyV0xPaKrPZypiUk7Hw5JENJNgJ7xbcKnkMEw2sthOCQ3D1glfspXfUH+FNTCVmsJOFjSaRRu0Fsli+BLb8VdcoYJs6JZqCtZ90Y8SchvMQC0zJg1fuZe331Dds4+cLbZ2gkSQUo1jndLkn8Sv8tshXostOOfl/JjI6VEfmtZjFqhA7iWzL4ttNIr2me1iRqyvvFfF7g4ZqO/DZFa0jpibPcKN1GNwYFsCrNR402AQDKSpSgiWkqUcAA5h+j4eq+az27QTXnhZJabUpSr8xRUo7flsEMNC6Am2nXoiUMZisKY3R73gN8MbD2aRJaZa1XlYiSk/61DEbhTecIcJM20qCUhkBmSKJSMn+uEEu1YAxV79vy9ftISondp5o+RKkm5ZU3phoZyw6t92mqOA64xZrAkS2CiSo1bEk5qVt2bIAKpVlSw1ph69MhEmjp6io/GQ5/CMnjFuY2Ant6nv/AKjiAKcQu1IByIYnu4hsCNh4Y4EGK5pfs+ieCpJSmae6sUlzNygO6vf5+7Y57oUFk0wU+DHyI9RA9rsza8uoNSMjv474ii5qyCDLWKG5nM7NJXKnFK0kKTecHIt+r74cWSasoUbjsA3Pa8PtLSUTEmaE/eoSWO0ZpVtYORv5whsU1RdBBKQCSLlDRjrCu3LPnG5Xd44zjfvFlXoOI97P2oqZJSSWx2NlDqwzQhZC1BlAZVSxVdVvBqIG0SLiGYMz3tuyB7RpKSmZ7OY6CpiFtqkkNdJ3BOeUV1I6qSuPaXGA2cyxTbGFB0kVzGBgGZIUkwPLvy9ZCqGrpqDxEGydLA0mJ5io6f5jzvSw43hcgyNE05wRLmf4iUSELDoUDw+eyIJlnIyimQZ2JFatGSJh1pYBzI1VeEKrT2W/hTK0osbfxJ9IdJUREiJo4QZNTbX+E/vBtUjciU6fom0S3eWSBmkhQ46tRzaBkTyI6Albl36RlokomBloSo7VAGG0+KH/ADX2iz6MHgyky7RBUu1H4jzr4F4dz+zchXdvo4Kcc7zwEvswsdyYlW5QKTwo4htPiFLd8fWKvo3HbMGSvck8ik9UsPCJL4+FY4KCvlEatFWhP7t/ykHyLxEqYpFFJUn8wI84bS9G4IMWbTkciFItCf4hB/Ek/wC14ITMLd+Wf5iPMQEmelWMe+zRBg4gDVHkidNnShNlhF0uzlsCxeimrlCbTFktM1N1aZbbb5JFQaMkYsINRYky1FSEque1WiZcKk3RrgEgFloqipqmuILJIXZrpAD3FAsAoMGrqse6RXc2+MJGrrPVWN/785qM1rHd1x6SjztCKBqUdT6RH+yE5r6CLdPloH7sHjEF74ZaByeCjWOYZaV9ZXZWjJYwF6GVnsJxTLbeR8zBs2eoDWWlA5DzhdaNJyB3pt/g6vEU8Ynrts9T+sIFRYWZYHeWkbhXyjwWhI7qCo76DoISz+0EsdyWTvWQPAO/WFdq7QzVUCro2IDeNT4wRNHY3P8AfacbVEtNqtKgPvJiZadjgdMzCe0adky/+mi+r4lUHIYnm0VtcxaiTtxOfUx5IkFSrqEqWrYkFR5tgN8O16JFHmP7CCNpPEJt2lp057yzdPuigPLPm8AKIEWWx9kZyhenKTIRnUKXwoWHXlDCVZbJZz91L9ose/M1q7QMAd4Ai51VSDpTf6ce/Ejw2O5iHRfZ2dOF9f3MnNa6P+UYqPhFhkTpVnT7OypZ+9MVVavQbvARpMXNnKF4k7B6DKGEuwy5ACp6m2IHeV9fREJXXl9m9h/d/tDpWBx7yDRui1zTeUS2ajXo+Jg61aVRLHsrOOKsef4jvhdbNJzJ2qkXJeASPnt4Qx0bogJF+bQCrGn9WwboWs9bPyEIPlNNF6PUs+0UeZ+qwZO0iiXqpUEIB1lnMjIZqI+sGhZpftEO7LonBxirckZDfCeUFz1hKlBJL3E4pBAdIO8+EGp0b2+azYQbXBfKu5lmOmZMzAqzBSsNfGbfT0wpG8iaZbFBvyzUcPkRnFNlh9V8w/M1bzbMPmxiyWmzCWoywpRT3iDherWg2AQS/QohCqefWRXezAkiFW61yWvBVTkBXYQcork0exmJvOkKSFjbdU7c8OogwS8yCaYDHlvix6W7NG2BLKurcmWoigSW1FAe7dAIzcZwWipau/MkuTvK/L0yCAkOE0G1RyAAFSTsixytBMF/aki9NlOZRP8A00A/duR+8Uq8qmFwMaPBWh+zMixTUzNacpOKlMAl8ShIHe4k8REel7eZi1zAWvmg2JAZI6VbaTDqsAciCfJ2lP8AZ2iyF7OszpWNwhyBwGPFPSGej+0NnnUV90vAg4Px9WMSS01DceVW6ueg2wfI0XLtKiFy0kAVJFQ+w4p4wvZpar+Rg+okB2Tjie/Z1DWSeYoYKkaUmJosBQ6Hr+kK7bob7KmcuTOmBMuWqYlCmUhhW7UAgY1frC/R3a2Uuk5N0/EKjnmIyrtBYM4HUBt8/wC/SMC0bZ2zLjLtMqZndOxVPHAxJMsZyhLIVLmB5cxKuBB6jKJpapiO6SN2I6GM5q8HHH1hQ2YWuSRGJmKEZK0qcFofen0PrBKJ0peCmOw086RQgjkTsyJNp2jpEqLSna3GN1WPZEKrPtHSKbSZOgjJuUbqJ28soC9iNrR6JS8lR0qRJ5lklK70pBP5RECtDycpf9yvWMCpg3xsLSvNBgi2WD8LH3gzWp5EqH/yqcO6mVswVlm97EvXhC+b2kn1ITKSTmEB61NSC8WAdmZExMoi+kLl36LzIQR3nyJiKZ2Qk/FNf8w/4xrrdpVO4/SC8F5VJ2nLQp3WK/gQPJIaAZlvmnGYr+tXrF1/+HyNs3+of8fp43l9kbNmlZ4zFfIiDDXaZeB+k7wXnPVqJ2RGpblnrsjqCeztlSKyZf8AML3+p3hf2gtZkJQmQEIvPVKQDRsMgOUEr162N0ovvt/M40EbkylWfRE9fdkzDxSQOq2ENrJ2NtCu+USxxvqHJLJ/ujJWnLSg3gsq2hTqB61HJoaJ0rNnpCg4B30DUIpvBi19uoXjAHrOWtO+ZtJ7N2SVWapUw7CWH9KWpxJieZpZKE3JEtKBkAAOgTQRBJ0YteL/ACgz7HKlf9RaU7szyxhBn6j52LH0/wBQwXHAxFakzJhq5g2Xo1CADOWmWPxEAng+MQ6Q7QiWg+wQ2QWrhiB416RSbTNWtRUoqUo4lVSYap072jfyj9YNnC/OXqbplKRdsyf/ACEeQ9ekB2ewrmqcupRxJ+ZiqWWeuUoLAbccFbQYtlv7VJa7Zk4jvEYPsG36rFn0joQtQznv/MgXAjLRspUmypvLLryGfIZcTFb0jpibaCwonIe6P+R3npASZKphKphfMkmnOPZlrCdWWHV9dIb0+hVD1Nu3r2H0i9l5bYbCbsmWCpRc78f04Q27MKKl6zIvEXXAJN1SVMxwpew2xX0AlWN5e33U8Np3xZexs4JmlKVJYgBZUTrVfVpVVNucM37JtJ03/wBBN9KaJIngoTqFajTIqY5YayabjE1pmXlAfCm70qfEk84P0pahLUsAuSKNk71824Qhk2gGtaE4tsGyFQGYZMas6V8q/nHfZ+zhc4bA6ulB4mLvJFwKIyFGx2kDfQRUuyBdazuAHMl/KLRa1sk6wRvOFHxqKUfEQvaD1SU4lf0xbSZijLJKQk3mOJJIU1WFADXFsjAU2XeUHOqUhTg0IOX1sjzSlrN9KVzkk/xE3WY4BTM7NhhXGDVC8h9VxV04Oe8d22Gal2kWDIi+TLvFx7y2ENNHJCQHL3iDd8ieUCpZEoKcApC1DilJZ9lW2xro+YpSQQyU5rWdY7SB6wyq43ipOYZ2qH3NoVkbPMZtzAjy6xyNO6OzWicmdKnJuagQQ5FDeIeKbbex8tdZSjLVWhqknzEAbU1U2FXPO8sVZ1GO0qCJhBfPaKGHWju0U+XS+VJ2L1vE1HB4Bt2g7RJe8glI95OsnjTAcYFsoc18IYIquXOzD3gx1KfSXWz9rJZpNlkHbLr4Fm6mD7FpeRNN0KKVHALDPuBBIfc8UyzWdJOEWST2eSqUFBWtsOyEm+F0WEhcgwviuu5liSlaO6SOHpE0vSMwd4BXEMfD0ilTNNWiSu57UkACixeDcSCR1g6R2sURryUq/Egt4VjNs+E3DjBhRestqdISz3kkeI+uUbgyTgsDjq+bRVpfaWQe9LWODEQQnStmVhMI4pPpC7fDrRyp+8t4q+ssv2deKVOOLiPGm7PAQhlzZZOrNS/FjBaJ8zKaW/OYC2jcf7EkWCD6JtjyJGqSxUHfJImJGW4RNPtK/gPX9IQ9mrRKVKYzGWmY4F4A3WSFEAitCvwixLkJ/iTP6h6QTUoFsO3c+vrn95dCSsAVaZmxuZiJRnHNuH6mDVSh/FX4ekRql/8AdmeHpFAR2xJxADY5hxUry8oR6a9oZ10h0oQgNSgCQ5O9/wDVFmXZgcZs3qkf7Yq/aOzGUoqBWUqAYk1pUpJA3P8A4h7Rtl8ZEo2wzF0uUq8pzSvT5cIadntI+zQU+zv11cqlyXOzDLbCJdoN2vXOLh2YWgyZaHSletSgUakuM1UIh/W7U7jMEhBbaRzbRaZmGonYkfM/pDOwaIR9nWFpBXdUq8Q6nC0VfF2pzjLZb5Ep780OMhrHww5xJZNLBdlnzpQIuyp129tRdLmsZ9PiN+FcCFJHcxDp7RgEpL0F8DqlXSEdqWCt8MukQT9JKmLBmzSquD0rTAUEaSpMu8/ujd0B21jTppatcOcmADhjkTyfMTg7xLJXLQlzjkPX0jSbcDkV2bH4QFNUArXCnYUZsg28Q5WBBXCEzbSuZ+FI6CPUJAFNVJz95XAbIi9smjaxyoyRwBx4npE8uSSbyi+0nAcdsFMXxPZYKqJ1UZ7+JzhjowpZQuqu6t24bqnD1BY1L7C+GMBzJgZhhvzbdGlktBBVk7n+lvUmKkEiWU4Mc6QmgoJAZy/evE/iUSKnDAAAUAo5SybSSo134N1aJ51pJxOEQWOyKKgohgRTfm/jHEACFyTOgdjhrHckKPFyB4AxaJzEMQCMwYrvZNDBf8o8H+ZhvpGddlrUMWLfLxhCxctGVOBKdaLXdmKKWYkgJyIBrjl6wx0dpVBUJQIvmgTxDuR8IDqfYDCUyqnoOAg/szNuzWVNWAWuofVKhgdxwpgTvhsV8YghaRmWfT2g02iSpCVXFFLPkQQzKHLHziv6CmKkIHtJCgklTEawo6SCkVSxcu0WWz6QSteqaBK0qyIIIxB4eMHTZYUwOx+G/dWGOkGL5xAb99GoSQpJcNTdjgbwAI3wuTKaCLVaPYlnaWuVMWdg9m19h+UlQH4CMxdT2a2rQbqtYCjHGlKH1jI+K0M3SyxnTuNwYxEwpqQ4wcfMH1bhFQ7Z3PaouJSCUkqISxLlg++h6xb/ALfJZ1LCNyix5beUUztbOlrmy1ylhQu3SzhiFEvUZ3vCE/hqt426kc/SEuI6eYLKQtMsLapUw4DGLjoKa6HdzmfkIr0iWsyHKqBrurgxyID51OEWGxz2QlIZ6BtpP6mN9TgwLDaVjtQkJnPeGsMBVrpKWJ2uCYVhtojotjsVktEpBMtBJDkqTdUSamoL47DAlr7E2Y91UyXzdP8AcH8YSb4nVW5SwEH5iR4JbdcSkgnb4v5vGyTuHT0aLFN7Czf3c5CvzAp8Q8Azey1sT+7C89VSTTmxhhNbp34cfb7wZqcdoEiY2XQkecbOPhPUekZN0dPR3pEwb7im6gNA9/8ACYZDK3BzKEGJ1mGNg0/PlMAq8n4V6w5ZjkRCtRjx4TatXGGGYUMRxOg6K7RSZqXUlSVjvAAqFcCDsNaHZBh0tJHurP8AK3mYo3Zazy5k+5MWEJKFFzg6WVtGQV4w8kaMlrCj7NglKlnXJ1Us5oWzweET8MrJJGcQn/IcRydPSh7im2m6PImEGndLrny1pSkXQAu7i4CkljvuhR6QoXNemAbDYGj1CjdI+MEHgWoOVOETVo6626gJc2EjEG0fZgtROQyzrgINtFoc0wTQfM+Dco3stmWlKUpQfvElTDPABR4lJ5Mc4GnLSgAOBsHCkaLcDB5gVO5knsErZxXd6RZ9GJAsFpSDhKtL8bgLRQ5ltVS6SAzUxpm+UW7sv/8AXWj/APK1f6BA7AcD6iWTHVt6ShzYa6Csky0XkIulaQ9wlioZ3XoSKUJGPGFi4ksk9UtaZiFFK0l0kZH684ZIyIIHBlt7M9nlWifdmgJRLLrQSLym9xnJZxU8Rjgh7TTb9qnnbNmeCiB4CLT2QmhZDrmM1Lx99LNdUTfLB8SRgBgYqtunKRaZqgdYTZtcfeU8VB3wJZt9zF6IKlTyCHJYZekCgxslVYIBBmGWyZUNkYyUvWRsIV4v6RDNBYOCKOHDODgRtB2xqlXc3H5n9YviDjIoKkk7/nDhBc/y+bQps80Mxzx5Q3sufAD66wPUKOlCPnC0MfMPpLn2YltKc4kq8y0F6RDoPLzEQdm3+zpJo4BrvcxPbhqHl5wnjL/nGf8AGVmbKrSNPsj5QYtQdq5wws0hw+MaAri3VF1ns00qdJcmhd67HIrTaYZWXtAO5M1ctvdJo44HGGshAGyEOlLPctSClIurN6ozV3vFzzg3hdK5gi+TiMFW+WuQuYu6oBEwXQzpCj7N6YAhYDxRpmllzCS7DGgY7+JhvZ54FmmuQHkgByzm/KIA3lor9nRUbfHiIUBW0ZI4MOVKHmGokuHx+sYV2yXQqGAIfm7Q8Qj2aCThs3nEDdu48BB9kSZRQe8TeO4qDIHIElt4ggTEoWzF9m0l7MXSnHA7d42w70EiYsrmrF1EsUBxKlYEvkACeLbICsUtJkghLKCSVKcuSWYNgGrhActKgSpKlJehKSQ9CqrYinjEr0g5nMSRiPtEEpSUkfdoUWBzJLimwYtFjsekSaPXYfqkV2VMdCAMw5z8TBdjULwckISdYjEnG6lqk0ycxWymu8dFgyJUFk8yywGak4gpO0RIgq91b+fQx5YzfS6k3Rkm6xOFdozFQDTAR4uxbHA4+EYXxH4YulAdW8p23jVGoNmxG8mTPWMQN7iI5VvTNF5ICg5D30pw3EvCrTdpXLTcDqT74xd+6jnUncN8Kf2gqXS6l1axcYE4jwiNFoFsXqs47Y2lrLMHAnO1KjRSo1JiMKxjXAi2Y47PWAzVqOUtBUQHck6qWatCb3BBGcWZGjyQTfUSpBQ6Un4DqkCjKAU++sIOxi/vVpcB0O5PwqTy9447Y6NpFSPYAGamoIOBDBiXPujzh6lFKYY7RS53DeWcrkTKMccINlF4WBQvC6+A71CWAc03/KCFzmSwNSfCM1lj4OJcbFOX7OWBrG4kISUszM1XqKHZFQ08Pv5h2kH+1MH2KeQZZdwyaUZgRR7zAs1SzeMCaeUPbTFKSz3SCnAslI9a5muEOPYprCgb+sURSHJJ9YqTKUSAkFROCQHJ4AYxeezchYsE9C0lCvZWpwtJSQ6Us6Sxhh2OnWeVZVTJNxc64pSy+sSAVBAGKRQBudYj0ZaVzbLPWtd5SpVoJV/IBhkzYboQucnbHcR+pBzKNpyUn2hXKQUylVAaiT7wDYJeo3HdCu+0WmbZ5irPMKJd4quo1XJoQSoDeGG5oWaEsRRapPtpZCbxLLSUuQlRTiK6wSeUNVsDt3gLB07xzYJwlolhJKQmZeL4lmLKJFKsaM9RnAdmsInWmbea77ReJUxdSvhDnKsWeRY5XsgkgaxYlmU9DvIoX/xAlksBuyFjVOsdUMp1KZiDrd0JGw8zDi0E2AlcD+It/wAheg777frKTb0BExaUuyVKAfGhIq0QJVWLT2z0YypS0hlFJBSxBISaE0Zw908scqx9lWPdPQwOwBWIl0YMoMd2K0Jm2aZIWdeWkzZCicAnWmyuBSFKAwdOWahXdHOG/Zns9MtRmXViXcAqoEg33F2m4F/1hhaewtqFEmUoOSGWR/qSIH4ijYmEKMdwIllOVMA5OAHWG02YUS5hwNw9SEpHi0HaL7L2iWXUgPQOFpIA6v4QJpfRdouLAkrruel9KsRhQQI2h26c7QgrKrnuY00D20mLAl/Z3KU1UhX+0tjWjwajtnKmKEoy5iVFQS7DF8FJe8nixiqaAsypYRNIBCyCAyVEJBIvELBDGrFt4ie16KWbXMUgBKe8CWIN5LHChJN4kZXhtENjSAgN84udRjaW9aNdjQ7OMMZc26uUlnSSq8chqkgnZXzELNGglIdN1gBSgwelTi7890OJBoYMEAO28oWyIxQsU55GF/aNSWkqILicADSjhTjmw6QxGA4Qq7TyVrsy0yyywUKSdjKAUf6SqCsPKZRdyJS7VOPsEJ+MJfgGVyqExHIkLABA3hqnpG3aVAQmTdFAFANjS4BAejdJzUnENsYEerxmUY6Mx60HqxH8372XcBCZiQklKg3dIL8CRiHaF8tVEJ/nX+Yir+XKDbTbETEOzLSCQ2O8DcdkLVTVJKUkHCgOcMOQeIAAjmbWOZqTR+JvnGIqlrqiHDkAllEFhxIJpx2RvIspuLWFAgm8RUMAODGkSWOWgy5h7qgUkKvFwXZroxBfKoYRK0s3aQXAkdktihdSlmYOdhGPWhAh/oZF4gVujEmmOIpi5yhEmyKQtyxSrAh2LM/eAOeYiz6Ik4YdI5FPXicx8sfyQgACjNtiFGkQgG9LAQly6SGuhy7UGG+DbOnAM1B4vFe03b1KKpbOFLKP5UmvVgOcC+Lafx6VT/t+0jTP0sT8oNdK7Shcpd+vtFp3tg2wUHACFOlJi5s1SyAguxAwcZjdBllmS/vV3VyyHAWnDgxx5NAkuSFBzaEg/iBBO+jxWtAgwO20MTmc5UYjBgkWRZYAVPz27IcWHQIFVqc7Ej5n0gBcLzKkgcwXs64nO5SClQJ3M9d1BFtKSZSSlVHwyFE0FA5xz92BbLZkpLJSxIIdi+FACKu8EyLShSEovVT3qksCQxyG3HduZrTMrDMUufJOJW5miV5XerVzo3ziL9mzDSgG3HoBFhUpyaMHNPlvj0JjOLmW8ZjFaEISUpUoPQV4AZpLccuUR6Wm3lDWJZiTmXAqaY7t8OLgjWbIScQIIbcjiQHwcwPs5psyFEsClTe0TTWAwUPxBzTAvlHRbMZU0gpuqlzJStwIIIIL8GMc+FhlgvcFCDUOKbRgRui06Fmky1EBKSETmuISkUQ7skAPC1qqT1CP6e/q8sZyJVnRqpmSQBklQURicEudsQadmJMhYQlR+JSkqQhIFbxKwHqBQPjljFaXb5xxmr5KI8oFmJK1ArJWQQXUXIbep2iatOiuG75HMo+s6lIxHlktntZQQJ7qU4CbxzyzJzziOxWz2s8zChLTCDdUVEJoE0Oq5dBNPigWwEXTQhi2IIDtSg47cTTMeWZylKbzM93WGJyus++N+u0lgT6H9plMBjpHy/eNu0BlCdLCkIum+7Jokm4zk7cDsYZRFaLLKSkn2ctIAJOqMuUL9KSjfZSrxZy7PrAHLLJ2qxiCfbj7JSDVV26k4uD5Ebdnjk/EFZrc/T7CaWhtUDoPzxLBZu0FhlICBMqO8RKmB1HE9zlwAhzYZsucgTJZdKnahHdJSaGuIjlFqtCDiFA8B8jBmjdK+zBVfKTLRORLo7GZUnqBl5RRa8jiNFpeVdpLGJhlmbUG6VMbgOy8zc8N8CdrtIoTJVKTVUx0lsk++7YOKc90cxssuqVHAKQ4ya8HHSOjWTSnwyEpllQSVJF0axbAHaR14wVkVO2ZQEuDviQWOkqSgA0SNrVCQ3hjvhja5KkMm6tRBN66B7zEd16Ag7cYkXZEiepKUhSUzFBgtlJZTAEPUPX6qT2iKfapNHTdJYqc6qtnEVphHo6mRkGR2nnbVcE79/5kFvlmVJvhg90kKSXOKHoxwP1WApelFfCkvhv4VPhBektJIXLuBKirUddQkYLape9keeyE6ZQyzxGXSM65wrAL6Q5dwTvHadPnD2Q/r/8AWMOmyoEGXQpI1VuagjNIaFFw8RsNeh9Y9c/5+vSBG9pK2PFenrGuamXcQq8m9edSQmt1mD1wxp40Xp0RaQAfYTGyLODvDYiH1oWrBJqaD66RcSgJASBRKUpB2gAB+NIUNgQYE06DZblmnNZEmaCAqVMZwDqKPHAQ3tM9U60FISoBZDXklNAkfE2yLNbrSruJocyHcZ7aQKudNLJKlXM9YlWTMCGxxc1iaHV7VBHyh7g6VMwPAi6y2NKHS5IUReD0zyfwMFfsn2iCAyReKSQFVKCCWOBYt1hjo5CSmZd1yE6pugF2BqB+IEfzCBNG22bUAKIKySEAOLzMSkHAsKtlHoq05395562wnobffI2/eD2iwukBRCzLFcO6SEvQu7sMM90HaCsTKoSBDWagGTNLqN5BcMA7knFLbXhNZktRMxYOwrU/9xIMZ+pwLMiOUanw06bN/wCJYTbkImezWQFFJUjYq6CSBsUGw2dBTZk5ZWVe0QlQS112N5RLltrfKGM6x3pgmrUsrSGBLFhwY7TWI16PB99TOo7ryi5JuNWucUa0snSZIvq6+oSJdtWmSmVdQtRIJ29MoHtko+0USgJc0DCjADzBg62aMK0malRvpAwatQMg7h35GBLLYwoEmY1SAHagpAthvGa7Vsz09pRpp1up+uflEn2leSlDmYFC3WrcAOgr4vG6PnCPQI1zCJdvW3e6gHzj37esVp/SPlANlOqOfmY2nmg/MnziQglCintGY0srNKT1ESy9LpIqkjgQfNoTzjqKP4T6fOIbHMoHMR4QxKmpD2lkRpKWdo4j0jDpOW7V6fW2EKe8ob26MI2JJWsCrFugA+Ud4KyvgrH6LXLVgoc6ecPdDT0JQSpQCSJocmjlDAcyQIpAs+JUQAA7DEuaeUG2OehLG8RLeZdKGKkruMlVd/hAXrB2EJVUEbMMTPSSz12YHxiQTGId8csYrhWpXee8Cx55gxvJ0kpJKXcJJDs+G2DBCNxF30/pLDY9JpCgi4vvA3suo8wAeETJtTM3xljSgCs8xRsKwkTpNXwoO9j6wNMty1OCzHFLUywzGG2Ha7sHcbQJ0zk5lp0tOvEqDMWoC+TcSdp+hXrVefuL2ggfTxvYdJJQAPZtnRR4YHhtyhpZ7fKV7zHYqh9DygF7BmyB2lkFlRJxFKJhNDJUTtNG2QEuwTGY3d5q8WWZbZQpfHIE+IEQLtEo+8DzZ+sBBI/CIY3O3IiROjpnswoJ1CshKnFSl3o7s6Wdoc2NEwABKglLpUoEPeUl9YsRu/pGyJrPLSQKgipFaB9gyghTj9BBlO2DAWXNny7RrKtBWpa1MCqZfUzPX4TlhicA43xpp6XrFqvmoO5YA3juIILHZAMu3hJRMKgllB33F2fN2diPWJtJWxKyVS2WkszCpqpzRmFTQGpriY2Cu2RxiI9RK785hMxH3YwNUimAoenz5NESREcucpeKLtAHJy2M/wBNnE6YQuxt9JJJZiZskCNJiYlSY3HDHH0hc7yRtINEWe/Pc4IBJ4mgBfbXpFlukxX0SxiCQc7pIJbbd4xKmYrJa/61E+JMAakk8zRp1iIvSQYw+wuSSrHl8jGKsl0EqYoY+9VyGScAO80Bm0zP4ihyT80mMM+YxBXeBbEJGY+ECDaWhhav1E7Va+s0PzwftJ7DaShM1lMMAEklRBxqNgGZpENnsCboUHJvqSxxF1iC7/iI3c42s6zraxZiMgKgjEFwa7POI0TWSHYVVi7Yl22DCm4Rr09ZLbzMvsACbR3MKJclSAkkqAZqs5xUXLf42wsSjaPCCTMSJN2jFSQkpdqi8cce59PESIX1APVvKuQTtMTLbAkbsR0MevtHT0PrEgMe3oWg5FKJSmYAaXSd+rrkNvCW5xPbuyAWtRRaEEAsbqVMCMQyQoAjY44CIZkzVXR2Qs4fhMBaVty5c+amXMUlN80CiK5mm0wQcTQ0I3bM5dKW7q2kmJZZjIyE+80xI7GdQc/Mx7bO4+8RkZFu8jtPLSr7tfBvGBNGAqUEiufTExkZEMcKTO/yEay5aUFRUXUSVADuhzmQdkRz7eSSAwSfhoIyMgajq3MsTjYQckks7qAdh70H2Wzark/dqICkhvaJNdYJOzftjIyOdsCSoyYQtSWKUihU94jWIDsDkOULk2EhSlXgxJLMcy8ZGQEWsJfoBhKbGoBxVJxAx5b4GXKutmGodv6x5GQWiwvnMq6gcQadPIXTIAfP5wTo9BmLAJLZ/P63iMjIZghzJlA4RqtDf0eagk+CoyMjpJm8pAZROST4skecayzmHEZGR06STJq6Oo1D1L4lQw5QVZrdMSQAqhIpdT6RkZFsmUKKeRCJGnJlHCDyIPgWgr9vkYy/7v8A1jIyIxKGiv0ksvTw/hqHBQPyESJ04l2KVeB+YjIyIwJB06ekIRpeUQ7tyPDIGJBpOUffHOMjIkCVOmSSi2JOCkncCPKNkz1D3aV8oyMgtB6bAfSJaqpQhX1kMjSQBUm6sOwdnGIdizgUyg1dvCZaXobyiQxCql67mNK0qIyMh6m3LccxW2sMVHpJ5NtTMAYqPE5jHHnsgkRkZAdWfOPpIXkyQRsoAxkZCkvieWMa4BwNDzpCCcFLYkubqX43Q/i/N4yMiw4juj/G30H7z//Z",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2OCW8UySVfXHst-x0qyiSfjFZ3AilgH1Ow&s"
       
      ]
    },
    {
      id: 5,
      title: "Chama Kikuu Cha Ushirika Karagwe Chazindua Miradi Ya Maendeleo",
      date: "November 28, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Karagwe,Kayanga",
      description: "Mrajis na Mtendaji Mkuu Tume ya Maendeleo ya Ushirika Tanzania (TCDC), Dkt. Benson Ndiege, amezindua miradi ya Shilingi 899,123,987 iliyotekelezwa kwa fedha za ruzuku ya jamii zilizotokana na mauzo ya  Kahawa Maalum kwa msimu wa mwaka 2022/2023 katika Chama Kikuu cha Ushirika cha Karagwe (KDCU).",
      attendees: 180,
      type: "workshop",
      year: "2023",
      gallery: [
        "https://www.ushirika.go.tz/images/made/uploads/ZAKUTUMIKA_KDCU_2_770_513shar-50brig-20.jpg",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475760884_919074030397069_7706393490913491816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SPNh_7H7kYwQ7kNvwE6mjnr&_nc_oc=AdkNg3PyN8wSDawJ8wfbMRPHt1QBo08Nyy2u7wTxukd85UJygHv_HYj4hGSIglnYMW0&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=SlJT3r35mbSayVePK5XbMQ&oh=00_AfTt8mLEZbmoZcL9rvoclcl8PJihpYLTo4i0Unz7isBx6A&oe=687537CC",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475408576_919074260397046_1278350230216214165_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wqHmuIOzzccQ7kNvwG1htiW&_nc_oc=AdmAJHKwVgT5PNg8FYzfSMk5pMdd_3aALWbrqF_NQQcPW5vYEbBkRl3KRzqDac6iJm0&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=8ltUSZV-zN1zcUSw20I_Ww&oh=00_AfQlMvDkGox72Lx9ZqCYcd68M7YAuu33NcbJLUpDutC72A&oe=68754610",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t39.30808-6/475870819_919074460397026_1668182337739707609_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2QE6KncshewQ7kNvwGRJxbL&_nc_oc=AdmJUV9lXcQmmh_mfmw4ABd6OdjQavnkoCSmlluuq3LSNNRIJA50MV3x-mhCV8PGXYQ&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=8uM7ns9Q7TfbKZh3iVsaUw&oh=00_AfTjDzDUpWndWax-haeSiwovb9cEAZlni0xrMHkMy8DJXw&oe=68752A29"
      ]
    },
    {
      id: 6,
      title: "MKUTANO MKUU WA KDCU LTD WA 37 KUTOKA RWERU PLAZA WILAYA YA KYERWA MKOA WA KAGERA KUPITIA KDCU TV",
      date: "April 07, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Lake Victoria Hotel, Bukoba",
      description: "Wajumbe wa Mkutano Mkuu wa 34 wa Chama Cha kikuu Cha Ushirika (KDCU) wamewachagua viongozi wa bodi watakaoongoza bodi ya Chama hicho kwa miaka mitatu mfululizo.Aidha, kwa pamoja wamemuchagua Mwenyekiti wa Bodi, Revelian Mbeikya Mjune na Makamu Mellitus Miduli wajumbe saba.",
      attendees: 450,
      type: "conference",
      year: "2025",
      gallery: [
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t1.6435-9/159117971_5106572802746364_5529890691762926465_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=hGACUB4PapUQ7kNvwGXK5MQ&_nc_oc=Adn4aQ952G9ICaQPWzPXh0xBqutkAFYFmlcJp0_jpunBl5BYPby_PpZg2IwMBHu_1hU&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=Sw-lmUS6c4Xd5UqQrpeAww&oh=00_AfSKe-XQiAg3NPcHjamtjzn-7QqPu2U2MOoOoKu0KvfsLw&oe=6896D3F4",
        "https://scontent.fdar7-1.fna.fbcdn.net/v/t1.6435-9/158848789_5106572809413030_2670943996058700690_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=kL-QjIiH4a8Q7kNvwH8oZzv&_nc_oc=AdkQ22yrTjKCzxk6_dEkJaVd3Pz9MGD0uVBLvPAWqT2g_X52miRTvDlve8GYPUFF1KI&_nc_zt=23&_nc_ht=scontent.fdar7-1.fna&_nc_gid=JNoafiqJJU6o2_lsL_QPBA&oh=00_AfQWhRYpiZ9x2ltsDfKuii76SnjRWHFQXl27Caj7Z7UjFA&oe=6896EE6F",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      ]
    }
  ];

  const years = ['all', '2024', '2023', '2022'];
  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'festival', label: 'Festivals' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'meeting', label: 'Meetings' },
    { value: 'ceremony', label: 'Ceremonies' },
    { value: 'conference', label: 'Conferences' }
  ];

  // Filter events based on search and filters
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || event.year === selectedYear;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  const allImages = events.flatMap(event => event.gallery);

  const openLightbox = (imageSrc) => {
    const imageIndex = allImages.findIndex(img => img === imageSrc);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  const HeroSection = () => (
    <section style={{
      background: 'linear-gradient(135deg, #FEA116 0%, #e4950f 100%)',
      color: 'white',
      padding: '5rem 0',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Matukio ya KDCU
          <span style={{
            display: 'block',
            fontSize: '1.5rem',
            fontWeight: '400',
            marginTop: '0.5rem',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Our Events & Activities
          </span>
        </h1>
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: '1.6'
        }}>
          Join us in celebrating coffee culture, sustainable farming, and community growth. Discover our workshops, festivals, and cooperative meetings that strengthen our coffee community.
        </p>
      </div>
    </section>
  );

  const SearchAndFilter = () => (
    <section style={{ padding: '2rem 0', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
            <Search size={20} style={{ 
              position: 'absolute', 
              left: '1rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#6b7280'
            }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search events..."
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 3rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FEA116'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                padding: '0.75rem 1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                padding: '0.75rem 1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              {eventTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
          {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
        </div>
      </div>
    </section>
  );

  const EventsSection = () => (
    <section style={{ padding: '3rem 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '1rem' }}>
              No events found
            </h3>
            <p style={{ color: '#9ca3af' }}>
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '2rem' 
          }}>
            {filteredEvents.map((event) => (
              <div key={event.id} style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}>
                {/* Event Gallery */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '2fr 1fr 1fr',
                  gap: '0.25rem',
                  height: '250px'
                }}>
                  <div 
                    style={{ 
                      backgroundImage: `url(${event.gallery[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      transition: 'opacity 0.3s ease'
                    }}
                    onClick={() => openLightbox(event.gallery[0])}
                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div 
                      style={{ 
                        backgroundImage: `url(${event.gallery[1]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        cursor: 'pointer',
                        flex: 1,
                        transition: 'opacity 0.3s ease'
                      }}
                      onClick={() => openLightbox(event.gallery[1])}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    />
                    <div 
                      style={{ 
                        backgroundImage: `url(${event.gallery[2]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        cursor: 'pointer',
                        flex: 1,
                        transition: 'opacity 0.3s ease'
                      }}
                      onClick={() => openLightbox(event.gallery[2])}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div 
                      style={{ 
                        backgroundImage: `url(${event.gallery[3]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        cursor: 'pointer',
                        height: '100%',
                        transition: 'opacity 0.3s ease'
                      }}
                      onClick={() => openLightbox(event.gallery[3])}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    onClick={() => openLightbox(event.gallery[0])}>
                      +{event.gallery.length - 1} more
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#1f2937',
                      flex: 1
                    }}>
                      {event.title}
                    </h3>
                    <span style={{
                      backgroundColor: '#FEA116',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      marginLeft: '1rem'
                    }}>
                      {event.type}
                    </span>
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {event.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} color="#92400e" />
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} color="#92400e" />
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} color="#92400e" />
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={16} color="#92400e" />
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Removed paddingTop: '80px' from this div */}
      <div> 
        <HeroSection />
        <SearchAndFilter />
        <EventsSection />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <img 
              src={selectedImage} 
              alt="Event" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Counter */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '1rem',
              fontSize: '0.875rem'
            }}>
              {currentImageIndex + 1} of {allImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;