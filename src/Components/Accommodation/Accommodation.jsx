import React from 'react'
import {PiHouseDuotone} from 'react-icons/pi'
import cput from '../../assets/cput.jpg'
import nsfas from '../../assets/nsfas.jpg'
import other from '../../assets/other.png'


const Data = [
    {
        id:1,
        image: cput,
        title: 'Angle American Residence',
        location: 'Belville Campus',
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: cput,
    },
    {
        id: 2, 
        image: cput,
        title: "De Beers Residence (East Wing)",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000, 
        company: "CPUT"
      },
      {
        id: 3,
        image: cput,
        title: "De Goede Hoop Residence",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.', 
        price: 3000,
        company: "CPUT"
      },
      {
        id: 4,
        image: cput,
        title: "Freedom Square Residence",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 5,
        image: cput,
        title: "Heroes House",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT" 
      },
      {
        id: 6,
        image: cput,
        title: "Kruskal",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 7, 
        image: cput,
        title: "MGR 1",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.', 
        price: 3000,
        company: "CPUT"
      },
      {
        id: 8,
        image: cput,
        title: "MGR 2",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"  
      },
      {
        id: 9,
        image: cput,
        title: "New 200 Beds Residence",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 10,
        image: cput,
        title: "Post Graduate Residence",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 11,
        image: cput,
        title: "Sacco Residence",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 12, 
        image: cput,
        title: "Sheriff's House Residence",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 13,
        image: cput,
        title: "Toplin House", 
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT" 
      },
      {
        id: 14,
        image: cput,
        title: "Park Central",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 15,
        image: cput,
        title: "Theresa Court",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"  
      },
      {
        id: 16,
        image: cput,
        title: "Toplin 2",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      }, 
      {
        id: 17,
        image: cput,
        title: "Bellpark",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 18,
        image: cput,
        title: "Reghkam",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 19,
        image: cput,
        title: "South Point- Orchards",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      }, 
      {
        id: 20,
        image: cput,
        title: "Student Life- Northville",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 21,
        image: cput,
        title: "Melade House",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 22,
        image: cput,
        title: "Student Junction- Goodman",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 23, 
        image: cput,
        title: "Student Junction- Libertas",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000, 
        company: "CPUT"
      },
      {
        id: 24,
        image: cput,
        title: "Student Junction- Le Ruth",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"   
      },
      {
        id: 25,
        image: cput,
        title: "Student Junction- Middestad",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"
      },
      {
        id: 26,
        image: cput,
        title: "Student Junction- Picton",
        location: "Belville Campus",
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT"  
      },
      {
        id: 27,
        image: cput,
        title: "Elile House",
        location: "Belville Campus", 
        desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
        price: 3000,
        company: "CPUT" 
      },

        {
          id: 28,
          image: cput,
          title: 'Cape Suites',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 29,
          image: cput,
          title: 'Catsville (Groote Schuur)',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 30,
          image: cput,
          title: 'City Edge Residence',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 31,
          image: cput,
          title: 'Downtown Lodge Res- Zonnebloem',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 32,
          image: cput,
          title: "Elizabeth Women's Residence (Gardens)",
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 33,
          image: cput,
          title: 'J&B Residence - Zonnebloem',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 34,
          image: cput,
          title: 'New Market Junction',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 35,
          image: cput,
          title: 'Plein Street (South Point)',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 36,
          image: cput,
          title: 'President House (Southpoint)',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },
        {
          id: 37,
          image: cput,
          title: 'Sandenburgh Res - Zonnebloem',
          location: 'Cape Town Campus',
          desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
          price: 3000,
          company: cput,
        },

          {
            id: 39,
            image: cput,
            title: 'St Peters Residence - Block A',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 40,
            image: cput,
            title: 'Hanover Street Residence',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 41,
            image: cput,
            title: 'Vogue House',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 42,
            image: cput,
            title: 'Stanhope - South Point',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 43,
            image: cput,
            title: 'Harfield',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 44,
            image: cput,
            title: 'Ruskin House',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 45,
            image: cput,
            title: 'Mountain House',
            location: 'Cape Town Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          
          {
            id: 46,
            image: cput,
            title: 'Viljoenhof Residence',
            location: 'Mowbray Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 47,
            image: cput,
            title: 'House Bliss',
            location: 'Wellington Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 48,
            image: cput,
            title: 'House Meiring',
            location: 'Wellington Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 49,
            image: cput,
            title: 'Murray House',
            location: 'Wellington Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 50,
            image: cput,
            title: 'House Navarre',
            location: 'Wellington Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
          {
            id: 51,
            image: cput,
            title: 'Wouter Malan',
            location: 'Wellington Campus',
            desc: 'Discover comfort and convenience in our single room accommodation. Perfect for those seeking a private and tranquil space, our single rooms offer a cozy retreat with all the essentials. These thoughtfully designed spaces are ideal for students, professionals, or travelers looking for solitude. Enjoy the luxury of having your own private sanctuary, complete with a comfortable bed, study area, and modern amenities. Whether it is a peaceful  sleep or focused study time, our single room accommodation provides the perfect setting for your needs.',
            price: 3000,
            company: cput,
          },
        
      
]

const Accommodation = () => {
  return(
    <div>
      <h1 className='textColor text-[25px] py-[2rem] pb-[2rem] font-bold w-[600px] block'> Complete Accommodations List: </h1>
        <div className="accommodationContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {
            Data.map(({id, image, title, location, desc, price, company}) =>{
                return(
                    <div key={id} className="group group/item singleAccommodation w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg ">
                        <span className='flex justify-between items-center gap-4'>
                            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                            <span className='felx items-center text-[#ccc] gap-1'>
                             <PiHouseDuotone/>
                            </span>
                        </span>
                        <h6 className='text-[#ccc]'>{location}</h6>
                        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group=hover:text-white '>
                        {desc} 
                        </p>
                        <h3 className='text-[13px] text-[#3d3c3c] pt-[20px] border-t-[2px] mt-[20px] group=hover:text-white font-semibold '>R {price}.00 p/m</h3>
                        <div className='company flex items-center gap-2'>
                            <img src={image} alt="Company Logo" className='w-[10%] rounded-[5px]'></img>
                            <span className='text-[12px] py-[1rem] block group-hover:text-white'>{company}</span>
                        </div>
                        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                         Apply Now
                        </button>
                    </div>
                )
            })
          }  
        </div>
    </div>
  )
}

export default Accommodation
