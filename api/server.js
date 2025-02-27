const jsonServer = require("json-server");

const server = jsonServer.create();

// Define your data directly in the code, simulating the db.json content
const db = {
  branches: [
    {
      id: 1,
      name: "ekbatan",
      title: "شعبه اکباتان",
      image:
        "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/info-1.jfif",
      phone_numberes: {
        mobile: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
        desktop_1: "۰۲۱-۵۴۸۹۱۲۵۰",
        desktop_2: "۰۲۱-۵۴۸۹۱۲۵۱",
      },
      location: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      work_time: "همه‌روزه از ساعت ۱۲ الی ۲۳",
      special_foods: [
        {
          id: "1",
          title: "دلمه برگ کلم",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-1.jfif",
          main_price: "۲۲۰,۰۰۰",
          discount: "%۸",
          price: "۲۰۹,۰۰۰",
          score: "۵۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "2",
          title: "بادمجان شکم‌پر",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-2.jfif",
          main_price: "۱۵۰,۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶,۰۰۰",
          score: "۳۲",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "3",
          title: "کالزونه اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-3.jfif",
          main_price: "۱۹۰,۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷,۰۰۰",
          score: "۶۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "4",
          title: "پیتزا قارچ",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-4.jfif",
          main_price: "۲۱۵,۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵,۰۰۰",
          score: "۳۳",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "5",
          title: "پاستا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-5.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۵۰",
          rate: "۵",
          isLiked: false,
        },
      ],
      famous_foods: [
        {
          id: "6",
          title: "پنینی اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-1.jfif",
          main_price: "۲۱۰,۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰,۰۰۰",
          score: "۲۰",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "7",
          title: "پیتزا پپرونی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-2.jfif",
          main_price: "",
          discount: "",
          price: "۱۰۰,۰۰۰",
          score: "۵۱",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "8",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-3.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "9",
          title: "بورانی بادمجان",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-4.jfif",
          main_price: "۱۷۰,۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸,۰۰۰",
          score: "۷۵",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "10",
          title: "پاکورا گیاهی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۸۰",
          rate: "۵",
          isLiked: false,
        },
      ],
      foreign_foods: [
        {
          id: "11",
          title: "سوشی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-1.jfif",
          main_price: "۱۰۰,۰۰۰",
          discount: "%۱۵",
          price: "۸۵,۰۰۰",
          score: "۷۰",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "12",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-2.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "13",
          title: "پاکورا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-3.jfif",
          main_price: "۱۲۵,۰۰۰",
          discount: "%۸",
          price: "۱۱۰,۰۰۰",
          score: "۷۵",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "14",
          title: "لازانیا",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-4.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۴۸",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "15",
          title: "سالاد خانگی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۵۹",
          rate: "۵",
          isLiked: false,
        },
      ],
      comments: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-1.jfif",
          name: "آرزو محمدعلیزاده",
          date: "۲۲ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-2.jfif",
          name: "سردار وظیفه",
          date: "۱۴ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-3.jfif",
          name: "علی مضفری",
          date: "۵ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
      ],
    },
    {
      id: 2,
      name: "chalos",
      title: "شعبه چالوس",
      image:
        "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/info-2.jfif",
      phone_numberes: {
        mobile: "۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
        desktop_1: "۰۲۱-۵۴۸۹۱۲۵۲",
        desktop_2: "۰۲۱-۵۴۸۹۱۲۵۳",
      },
      location:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      work_time: "همه‌روزه از ساعت ۱۲ الی ۲۳",
      special_foods: [
        {
          id: "1",
          title: "پیتزا قارچ",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-4.jfif",
          main_price: "۲۱۵,۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵,۰۰۰",
          score: "۳۳",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "2",
          title: "بادمجان شکم‌پر",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-2.jfif",
          main_price: "۱۵۰,۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶,۰۰۰",
          score: "۳۲",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "3",
          title: "پاستا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-5.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۵۰",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "4",
          title: "کالزونه اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-3.jfif",
          main_price: "۱۹۰,۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷,۰۰۰",
          score: "۶۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "5",
          title: "دلمه برگ کلم",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-1.jfif",
          main_price: "۲۲۰,۰۰۰",
          discount: "%۸",
          price: "۲۰۹,۰۰۰",
          score: "۵۲",
          rate: "۵",
          isLiked: false,
        },
      ],
      famous_foods: [
        {
          id: "6",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-3.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "7",
          title: "پیتزا پپرونی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-2.jfif",
          main_price: "",
          discount: "",
          price: "۱۰۰,۰۰۰",
          score: "۵۱",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "8",
          title: "پنینی اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-1.jfif",
          main_price: "۲۱۰,۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰,۰۰۰",
          score: "۲۰",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "9",
          title: "پاکورا گیاهی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۸۰",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "10",
          title: "بورانی بادمجان",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-4.jfif",
          main_price: "۱۷۰,۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸,۰۰۰",
          score: "۷۵",
          rate: "۵",
          isLiked: false,
        },
      ],
      foreign_foods: [
        {
          id: "11",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-2.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "12",
          title: "سالاد خانگی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۵۹",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "13",
          title: "سوشی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-1.jfif",
          main_price: "۱۰۰,۰۰۰",
          discount: "%۱۵",
          price: "۸۵,۰۰۰",
          score: "۷۰",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "14",
          title: "لازانیا",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-4.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۴۸",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "15",
          title: "پاکورا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-3.jfif",
          main_price: "۱۲۵,۰۰۰",
          discount: "%۸",
          price: "۱۱۰,۰۰۰",
          score: "۷۵",
          rate: "۴",
          isLiked: false,
        },
      ],
      comments: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-1.jfif",
          name: "آرزو محمدعلیزاده",
          date: "۲۳ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-2.jfif",
          name: "سردار وظیفه",
          date: "۱۹ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-3.jfif",
          name: "علی مضفری",
          date: "۲۳ بهمن ۱۴۰۱",
          description:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
      ],
    },
    {
      id: 3,
      name: "aghdasiyeh",
      title: "شعبه اقدسیه",
      image:
        "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/info-3.jfif",
      phone_numberes: {
        mobile: "۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
        desktop_1: "۰۲۱-۵۴۸۹۱۲۵۴",
        desktop_2: "۰۲۱-۵۴۸۹۱۲۵۵",
      },
      location: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      work_time: "همه‌روزه از ساعت ۱۲ الی ۲۳",
      special_foods: [
        {
          id: "1",
          title: "بادمجان شکم‌پر",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-2.jfif",
          main_price: "۱۵۰,۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶,۰۰۰",
          score: "۳۲",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "2",
          title: "پاستا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-5.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۵۰",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "3",
          title: "کالزونه اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-3.jfif",
          main_price: "۱۹۰,۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷,۰۰۰",
          score: "۶۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "4",
          title: "دلمه برگ کلم",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-1.jfif",
          main_price: "۲۲۰,۰۰۰",
          discount: "%۸",
          price: "۲۰۹,۰۰۰",
          score: "۵۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "5",
          title: "پیتزا قارچ",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-4.jfif",
          main_price: "۲۱۵,۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵,۰۰۰",
          score: "۳۳",
          rate: "۳",
          isLiked: false,
        },
      ],
      famous_foods: [
        {
          id: "6",
          title: "بورانی بادمجان",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-4.jfif",
          main_price: "۱۷۰,۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸,۰۰۰",
          score: "۷۵",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "7",
          title: "پیتزا پپرونی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-2.jfif",
          main_price: "",
          discount: "",
          price: "۱۰۰,۰۰۰",
          score: "۵۱",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "8",
          title: "پنینی اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-1.jfif",
          main_price: "۲۱۰,۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰,۰۰۰",
          score: "۲۰",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "9",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-3.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "10",
          title: "پاکورا گیاهی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۸۰",
          rate: "۵",
          isLiked: false,
        },
      ],
      foreign_foods: [
        {
          id: "11",
          title: "سوشی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-1.jfif",
          main_price: "۱۰۰,۰۰۰",
          discount: "%۱۵",
          price: "۸۵,۰۰۰",
          score: "۷۰",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "12",
          title: "پاکورا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-3.jfif",
          main_price: "۱۲۵,۰۰۰",
          discount: "%۸",
          price: "۱۱۰,۰۰۰",
          score: "۷۵",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "13",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-2.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "14",
          title: "سالاد خانگی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۵۹",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "15",
          title: "لازانیا",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-4.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۴۸",
          rate: "۵",
          isLiked: false,
        },
      ],
      comments: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-1.jfif",
          name: "آرزو محمدعلیزاده",
          date: "۲۳ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-2.jfif",
          name: "سردار وظیفه",
          date: "۲۰ بهمن ۱۴۰۱",
          description:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-3.jfif",
          name: "علی مضفری",
          date: "۱۲ دی ۱۴۰۱",
          description:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
      ],
    },
    {
      id: 4,
      name: "vanak",
      title: "شعبه ونک",
      image:
        "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/info-4.jfif",
      phone_numberes: {
        mobile: "۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
        desktop_1: "۰۲۱-۵۴۸۹۱۲۵۶",
        desktop_2: "۰۲۱-۵۴۸۹۱۲۵۷",
      },
      location: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      work_time: "همه‌روزه از ساعت ۱۲ الی ۲۳",
      special_foods: [
        {
          id: "1",
          title: "پیتزا قارچ",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-4.jfif",
          main_price: "۲۱۵,۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵,۰۰۰",
          score: "۳۳",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "2",
          title: "بادمجان شکم‌پر",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-2.jfif",
          main_price: "۱۵۰,۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶,۰۰۰",
          score: "۳۲",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "3",
          title: "کالزونه اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-3.jfif",
          main_price: "۱۹۰,۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷,۰۰۰",
          score: "۶۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "4",
          title: "دلمه برگ کلم",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-1.jfif",
          main_price: "۲۲۰,۰۰۰",
          discount: "%۸",
          price: "۲۰۹,۰۰۰",
          score: "۵۲",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "5",
          title: "پاستا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/s-f-5.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۵۰",
          rate: "۵",
          isLiked: false,
        },
      ],
      famous_foods: [
        {
          id: "6",
          title: "پیتزا پپرونی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-2.jfif",
          main_price: "",
          discount: "",
          price: "۱۰۰,۰۰۰",
          score: "۵۱",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "7",
          title: "پنینی اسفناج",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-1.jfif",
          main_price: "۲۱۰,۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰,۰۰۰",
          score: "۲۰",
          rate: "۳",
          isLiked: false,
        },
        {
          id: "8",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-3.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "9",
          title: "پاکورا گیاهی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۸۰",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "10",
          title: "بورانی بادمجان",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/p-f-4.jfif",
          main_price: "۱۷۰,۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸,۰۰۰",
          score: "۷۵",
          rate: "۵",
          isLiked: false,
        },
      ],
      foreign_foods: [
        {
          id: "11",
          title: "پاکورا سبزیجات",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-3.jfif",
          main_price: "۱۲۵,۰۰۰",
          discount: "%۸",
          price: "۱۱۰,۰۰۰",
          score: "۷۵",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "12",
          title: "سوشی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-1.jfif",
          main_price: "۱۰۰,۰۰۰",
          discount: "%۱۵",
          price: "۸۵,۰۰۰",
          score: "۷۰",
          rate: "۴",
          isLiked: false,
        },
        {
          id: "13",
          title: "لازانیا",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-4.jfif",
          main_price: "",
          discount: "",
          price: "۱۵۰,۰۰۰",
          score: "۴۸",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "14",
          title: "سالاد خانگی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-5.jfif",
          main_price: "۱۷۵,۰۰۰",
          discount: "%۲۰",
          price: "۱۵۰,۰۰۰",
          score: "۵۹",
          rate: "۵",
          isLiked: false,
        },
        {
          id: "15",
          title: "راتاتویی",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/f-f-2.jfif",
          main_price: "۱۸۰,۰۰۰",
          discount: "%۴۵",
          price: "۹۵,۰۰۰",
          score: "۴۳",
          rate: "۴",
          isLiked: false,
        },
      ],
      comments: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-1.jfif",
          name: "آرزو محمدعلیزاده",
          date: "۲۲ اسفند ۱۴۰۱",
          description:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-2.jfif",
          name: "سردار وظیفه",
          date: "۱۹ بهمن ۱۴۰۱",
          description:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/branches/c-3.jfif",
          name: "علی مضفری",
          date: "۱۸ بهمن ۱۴۰۱",
          description:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
          rate: "۴",
        },
      ],
    },
  ],
  menu: [
    {
      id: 1,
      name: "main_dish",
      persian_foods: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-1.jfif",
          title: "کوفته برنجی",
          detail: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۳۵",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-2.jfif",
          title: "کشک بادمجان",
          detail: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
          main_price: "",
          discount: "",
          price: "۹۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-3.jfif",
          title: "میرزا قاسمی",
          detail: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۰",
          price: "۱۴۲٬۵۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "4",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-4.jfif",
          title: "باقلاقاتوق",
          detail: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۰",
          price: "۱۸۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "5",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-5.jfif",
          title: "فلافل",
          detail: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
          main_price: "",
          discount: "",
          price: "۸۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "6",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-6.jfif",
          title: "کله جوش",
          detail: "کشک، گردو، پیاز، نعناع خشک",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۵",
          price: "۲۰۳٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "7",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-7.jfif",
          title: "بورانی بادمجان",
          detail: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "8",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-8.jfif",
          title: "بادمجان شکم‌پر",
          detail: "بادمجان، پیاز، گوجه فرنگی، سبزی خشک",
          main_price: "۱۵۰٬۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "9",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-9.jfif",
          title: "دلمه برگ کلم",
          detail: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر، رب",
          main_price: "۲۲۰٬۰۰۰",
          discount: "%۸",
          price: "۲۲۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "10",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-10.jfif",
          title: "دلمه برگ مو",
          detail: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
          main_price: "",
          discount: "",
          price: "۱۹۵٬۰۰۰ ",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "11",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-11.jfif",
          title: "کوکو سبزی",
          detail: "تخم مرغ، گردو، سیر، آرد، روغن مایع، سبزی‌ کوکویی",
          main_price: "۳۰۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۷۰٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "12",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-12.jfif",
          title: "کوکو سیب‌زمینی و عدس",
          detail: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری",
          main_price: "۱۳۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۰۵٬۰۰۰",
          rate: "1",
          score: "۷۲",
          isLiked: false,
        },
      ],
      foreign_foods: [
        {
          id: "13",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-1.jfif",
          title: "پاستا سبزیجات",
          detail: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
          main_price: "۱۷۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۴۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "14",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-2.jfif",
          title: "پاستا بلونز",
          detail:
            "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۱۲",
          price: "۱۶۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "15",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-3.jfif",
          title: "راتاتویی",
          detail:
            "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۴۵",
          price: "۹۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "16",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-4.jfif",
          title: "لازانیا",
          detail:
            "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "17",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-5.jfif",
          title: "سوشی",
          detail:
            "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
          main_price: "۱۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۸۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "18",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-6.jfif",
          title: "پاکورا سبزیجات",
          detail: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۸",
          price: "۱۱۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "19",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-7.jfif",
          title: "کالزونه اسفناج",
          detail:
            "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
          main_price: "۱۹۰٬۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "20",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-8.jfif",
          title: "پالاک پنیر ",
          detail: "پنیر، اسفناج، گوجه، پیاز، سیر ",
          main_price: "۲۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۸۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
      ],
      pizzas: [
        {
          id: "21",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-1.jfif",
          title: "پیتزا روکولا",
          detail:
            "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ",
          main_price: "۱۹۵٬۰۰۰",
          discount: "%۱۲",
          price: "۱۸۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "22",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-2.jfif",
          title: "پیتزا بادمجان و زیتون",
          detail:
            "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "23",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-3.jfif",
          title: "پیتزا سبزیجات و خامه",
          detail:
            "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۲۱",
          price: "۱۸۵٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "24",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-4.jfif",
          title: "پیتزا قارچ",
          detail:
            "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی",
          main_price: "۲۱۵٬۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "25",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-5.jfif",
          title: "پیتزا پپرونی",
          detail:
            "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی",
          main_price: "",
          discount: "",
          price: "۱۰۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "26",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-6.jfif",
          title: "پیتزا اسفناج",
          detail: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ",
          main_price: "۲۸۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۵۲٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "27",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-7.jfif",
          title: "پیتزا مارگاریتا",
          detail: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۳",
          price: "۱۴۷٬۰۰۰",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "28",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-8.jfif",
          title: "پیتزا پنیر",
          detail:
            "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۱۶",
          price: "۱۰۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
      sandwiches: [
        {
          id: "29",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-1.jfif",
          title: "ساندویچ کتلت مخصوص",
          detail:
            "سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون",
          main_price: "۲۳۰٬۰۰۰",
          discount: "%۱۸",
          price: "۲۰۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "30",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-2.jfif",
          title: "ساندویچ سوسیس کوکتل",
          detail: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۵",
          price: "۱۶۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "31",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-3.jfif",
          title: "ساندویچ کتلت کدو سبز",
          detail: "کدو سبز، هویج، سیب زمینی، پیاز",
          main_price: "",
          discount: "",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "32",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-4.jfif",
          title: "پنینی اسفناج",
          detail:
            " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
    },
    {
      id: 2,
      name: "appetizer",
      persian_appetizers: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-1.jfif",
          title: "کوفته برنجی",
          detail: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۳۵",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-2.jfif",
          title: "کشک بادمجان",
          detail: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
          main_price: "",
          discount: "",
          price: "۹۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-3.jfif",
          title: "میرزا قاسمی",
          detail: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۰",
          price: "۱۴۲٬۵۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "4",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-4.jfif",
          title: "باقلاقاتوق",
          detail: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۰",
          price: "۱۸۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "5",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-5.jfif",
          title: "فلافل",
          detail: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
          main_price: "",
          discount: "",
          price: "۸۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "6",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-6.jfif",
          title: "کله جوش",
          detail: "کشک، گردو، پیاز، نعناع خشک",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۵",
          price: "۲۰۳٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "7",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-7.jfif",
          title: "بورانی بادمجان",
          detail: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "8",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-8.jfif",
          title: "بادمجان شکم‌پر",
          detail: "بادمجان، پیاز، گوجه فرنگی، سبزی خشک",
          main_price: "۱۵۰٬۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "9",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-9.jfif",
          title: "دلمه برگ کلم",
          detail: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر، رب",
          main_price: "۲۲۰٬۰۰۰",
          discount: "%۸",
          price: "۲۲۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "10",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-10.jfif",
          title: "دلمه برگ مو",
          detail: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
          main_price: "",
          discount: "",
          price: "۱۹۵٬۰۰۰ ",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "11",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-11.jfif",
          title: "کوکو سبزی",
          detail: "تخم مرغ، گردو، سیر، آرد، روغن مایع، سبزی‌ کوکویی",
          main_price: "۳۰۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۷۰٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "12",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-12.jfif",
          title: "کوکو سیب‌زمینی و عدس",
          detail: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری",
          main_price: "۱۳۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۰۵٬۰۰۰",
          rate: "1",
          score: "۷۲",
          isLiked: false,
        },
      ],
      foreign_appetizers: [
        {
          id: "13",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-1.jfif",
          title: "پاستا سبزیجات",
          detail: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
          main_price: "۱۷۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۴۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "14",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-2.jfif",
          title: "پاستا بلونز",
          detail:
            "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۱۲",
          price: "۱۶۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "15",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-3.jfif",
          title: "راتاتویی",
          detail:
            "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۴۵",
          price: "۹۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "16",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-4.jfif",
          title: "لازانیا",
          detail:
            "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "17",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-5.jfif",
          title: "سوشی",
          detail:
            "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
          main_price: "۱۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۸۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "18",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-6.jfif",
          title: "پاکورا سبزیجات",
          detail: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۸",
          price: "۱۱۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "19",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-7.jfif",
          title: "کالزونه اسفناج",
          detail:
            "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
          main_price: "۱۹۰٬۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "20",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-8.jfif",
          title: "پالاک پنیر ",
          detail: "پنیر، اسفناج، گوجه، پیاز، سیر ",
          main_price: "۲۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۸۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
      ],
      soups: [
        {
          id: "21",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-1.jfif",
          title: "پیتزا روکولا",
          detail:
            "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ",
          main_price: "۱۹۵٬۰۰۰",
          discount: "%۱۲",
          price: "۱۸۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "22",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-2.jfif",
          title: "پیتزا بادمجان و زیتون",
          detail:
            "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "23",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-3.jfif",
          title: "پیتزا سبزیجات و خامه",
          detail:
            "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۲۱",
          price: "۱۸۵٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "24",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-4.jfif",
          title: "پیتزا قارچ",
          detail:
            "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی",
          main_price: "۲۱۵٬۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "25",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-5.jfif",
          title: "پیتزا پپرونی",
          detail:
            "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی",
          main_price: "",
          discount: "",
          price: "۱۰۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "26",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-6.jfif",
          title: "پیتزا اسفناج",
          detail: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ",
          main_price: "۲۸۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۵۲٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "27",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-7.jfif",
          title: "پیتزا مارگاریتا",
          detail: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۳",
          price: "۱۴۷٬۰۰۰",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "28",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-8.jfif",
          title: "پیتزا پنیر",
          detail:
            "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۱۶",
          price: "۱۰۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
      finger_foods: [
        {
          id: "29",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-1.jfif",
          title: "ساندویچ کتلت مخصوص",
          detail:
            "سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون",
          main_price: "۲۳۰٬۰۰۰",
          discount: "%۱۸",
          price: "۲۰۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "30",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-2.jfif",
          title: "ساندویچ سوسیس کوکتل",
          detail: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۵",
          price: "۱۶۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "31",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-3.jfif",
          title: "ساندویچ کتلت کدو سبز",
          detail: "کدو سبز، هویج، سیب زمینی، پیاز",
          main_price: "",
          discount: "",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "32",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-4.jfif",
          title: "پنینی اسفناج",
          detail:
            " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
    },
    {
      id: 3,
      name: "dessert",
      persian_desserts: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-1.jfif",
          title: "کوفته برنجی",
          detail: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۳۵",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-2.jfif",
          title: "کشک بادمجان",
          detail: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
          main_price: "",
          discount: "",
          price: "۹۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-3.jfif",
          title: "میرزا قاسمی",
          detail: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۰",
          price: "۱۴۲٬۵۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "4",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-4.jfif",
          title: "باقلاقاتوق",
          detail: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۰",
          price: "۱۸۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "5",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-5.jfif",
          title: "فلافل",
          detail: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
          main_price: "",
          discount: "",
          price: "۸۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "6",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-6.jfif",
          title: "کله جوش",
          detail: "کشک، گردو، پیاز، نعناع خشک",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۵",
          price: "۲۰۳٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "7",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-7.jfif",
          title: "بورانی بادمجان",
          detail: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "8",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-8.jfif",
          title: "بادمجان شکم‌پر",
          detail: "بادمجان، پیاز، گوجه فرنگی، سبزی خشک",
          main_price: "۱۵۰٬۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "9",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-9.jfif",
          title: "دلمه برگ کلم",
          detail: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر، رب",
          main_price: "۲۲۰٬۰۰۰",
          discount: "%۸",
          price: "۲۲۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "10",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-10.jfif",
          title: "دلمه برگ مو",
          detail: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
          main_price: "",
          discount: "",
          price: "۱۹۵٬۰۰۰ ",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "11",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-11.jfif",
          title: "کوکو سبزی",
          detail: "تخم مرغ، گردو، سیر، آرد، روغن مایع، سبزی‌ کوکویی",
          main_price: "۳۰۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۷۰٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "12",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-12.jfif",
          title: "کوکو سیب‌زمینی و عدس",
          detail: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری",
          main_price: "۱۳۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۰۵٬۰۰۰",
          rate: "1",
          score: "۷۲",
          isLiked: false,
        },
      ],
      foreign_desserts: [
        {
          id: "13",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-1.jfif",
          title: "پاستا سبزیجات",
          detail: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
          main_price: "۱۷۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۴۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "14",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-2.jfif",
          title: "پاستا بلونز",
          detail:
            "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۱۲",
          price: "۱۶۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "15",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-3.jfif",
          title: "راتاتویی",
          detail:
            "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۴۵",
          price: "۹۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "16",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-4.jfif",
          title: "لازانیا",
          detail:
            "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "17",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-5.jfif",
          title: "سوشی",
          detail:
            "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
          main_price: "۱۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۸۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "18",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-6.jfif",
          title: "پاکورا سبزیجات",
          detail: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۸",
          price: "۱۱۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "19",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-7.jfif",
          title: "کالزونه اسفناج",
          detail:
            "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
          main_price: "۱۹۰٬۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "20",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-8.jfif",
          title: "پالاک پنیر ",
          detail: "پنیر، اسفناج، گوجه، پیاز، سیر ",
          main_price: "۲۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۸۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
      ],
      jellies: [
        {
          id: "21",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-1.jfif",
          title: "پیتزا روکولا",
          detail:
            "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ",
          main_price: "۱۹۵٬۰۰۰",
          discount: "%۱۲",
          price: "۱۸۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "22",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-2.jfif",
          title: "پیتزا بادمجان و زیتون",
          detail:
            "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "23",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-3.jfif",
          title: "پیتزا سبزیجات و خامه",
          detail:
            "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۲۱",
          price: "۱۸۵٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "24",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-4.jfif",
          title: "پیتزا قارچ",
          detail:
            "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی",
          main_price: "۲۱۵٬۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "25",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-5.jfif",
          title: "پیتزا پپرونی",
          detail:
            "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی",
          main_price: "",
          discount: "",
          price: "۱۰۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "26",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-6.jfif",
          title: "پیتزا اسفناج",
          detail: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ",
          main_price: "۲۸۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۵۲٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "27",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-7.jfif",
          title: "پیتزا مارگاریتا",
          detail: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۳",
          price: "۱۴۷٬۰۰۰",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "28",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-8.jfif",
          title: "پیتزا پنیر",
          detail:
            "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۱۶",
          price: "۱۰۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
      cakes: [
        {
          id: "29",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-1.jfif",
          title: "ساندویچ کتلت مخصوص",
          detail:
            "سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون",
          main_price: "۲۳۰٬۰۰۰",
          discount: "%۱۸",
          price: "۲۰۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "30",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-2.jfif",
          title: "ساندویچ سوسیس کوکتل",
          detail: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۵",
          price: "۱۶۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "31",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-3.jfif",
          title: "ساندویچ کتلت کدو سبز",
          detail: "کدو سبز، هویج، سیب زمینی، پیاز",
          main_price: "",
          discount: "",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "32",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-4.jfif",
          title: "پنینی اسفناج",
          detail:
            " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
    },
    {
      id: 4,
      name: "drink",
      persian_drinks: [
        {
          id: "1",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-1.jfif",
          title: "کوفته برنجی",
          detail: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۳۵",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "2",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-2.jfif",
          title: "کشک بادمجان",
          detail: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
          main_price: "",
          discount: "",
          price: "۹۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "3",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-3.jfif",
          title: "میرزا قاسمی",
          detail: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۰",
          price: "۱۴۲٬۵۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "4",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-4.jfif",
          title: "باقلاقاتوق",
          detail: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۰",
          price: "۱۸۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "5",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-5.jfif",
          title: "فلافل",
          detail: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
          main_price: "",
          discount: "",
          price: "۸۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "6",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-6.jfif",
          title: "کله جوش",
          detail: "کشک، گردو، پیاز، نعناع خشک",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۵",
          price: "۲۰۳٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "7",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-7.jfif",
          title: "بورانی بادمجان",
          detail: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۲۲",
          price: "۱۴۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "8",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-8.jfif",
          title: "بادمجان شکم‌پر",
          detail: "بادمجان، پیاز، گوجه فرنگی، سبزی خشک",
          main_price: "۱۵۰٬۰۰۰",
          discount: "%۱۸",
          price: "۱۳۶٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "9",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-9.jfif",
          title: "دلمه برگ کلم",
          detail: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر، رب",
          main_price: "۲۲۰٬۰۰۰",
          discount: "%۸",
          price: "۲۲۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "10",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-10.jfif",
          title: "دلمه برگ مو",
          detail: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
          main_price: "",
          discount: "",
          price: "۱۹۵٬۰۰۰ ",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "11",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-11.jfif",
          title: "کوکو سبزی",
          detail: "تخم مرغ، گردو، سیر، آرد، روغن مایع، سبزی‌ کوکویی",
          main_price: "۳۰۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۷۰٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "12",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-f-12.jfif",
          title: "کوکو سیب‌زمینی و عدس",
          detail: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری",
          main_price: "۱۳۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۰۵٬۰۰۰",
          rate: "1",
          score: "۷۲",
          isLiked: false,
        },
      ],
      foreign_drinks: [
        {
          id: "13",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-1.jfif",
          title: "پاستا سبزیجات",
          detail: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
          main_price: "۱۷۵٬۰۰۰",
          discount: "%۲۰",
          price: "۱۴۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "14",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-2.jfif",
          title: "پاستا بلونز",
          detail:
            "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
          main_price: "۱۷۰٬۰۰۰",
          discount: "%۱۲",
          price: "۱۶۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "15",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-3.jfif",
          title: "راتاتویی",
          detail:
            "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
          main_price: "۱۸۰٬۰۰۰",
          discount: "%۴۵",
          price: "۹۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "16",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-4.jfif",
          title: "لازانیا",
          detail:
            "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "17",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-5.jfif",
          title: "سوشی",
          detail:
            "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
          main_price: "۱۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۸۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "18",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-6.jfif",
          title: "پاکورا سبزیجات",
          detail: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۸",
          price: "۱۱۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "19",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-7.jfif",
          title: "کالزونه اسفناج",
          detail:
            "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
          main_price: "۱۹۰٬۰۰۰",
          discount: "%۱۷",
          price: "۱۷۷٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "20",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/f-f-8.jfif",
          title: "پالاک پنیر ",
          detail: "پنیر، اسفناج، گوجه، پیاز، سیر ",
          main_price: "۲۰۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۸۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
      ],
      cold_drinks: [
        {
          id: "21",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-1.jfif",
          title: "پیتزا روکولا",
          detail:
            "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ",
          main_price: "۱۹۵٬۰۰۰",
          discount: "%۱۲",
          price: "۱۸۸٬۰۰۰ ",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "22",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-2.jfif",
          title: "پیتزا بادمجان و زیتون",
          detail:
            "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی",
          main_price: "",
          discount: "",
          price: "۱۵۰٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "23",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-3.jfif",
          title: "پیتزا سبزیجات و خامه",
          detail:
            "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۲۱",
          price: "۱۸۵٬۰۰۰ ",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "24",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-4.jfif",
          title: "پیتزا قارچ",
          detail:
            "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی",
          main_price: "۲۱۵٬۰۰۰",
          discount: "%۲۵",
          price: "۱۷۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "25",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-5.jfif",
          title: "پیتزا پپرونی",
          detail:
            "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی",
          main_price: "",
          discount: "",
          price: "۱۰۰٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "26",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-6.jfif",
          title: "پیتزا اسفناج",
          detail: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ",
          main_price: "۲۸۰٬۰۰۰",
          discount: "%۱۰",
          price: "۲۵۲٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "27",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-7.jfif",
          title: "پیتزا مارگاریتا",
          detail: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا",
          main_price: "۱۶۵٬۰۰۰",
          discount: "%۱۳",
          price: "۱۴۷٬۰۰۰",
          rate: "2",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "28",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/p-8.jfif",
          title: "پیتزا پنیر",
          detail:
            "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون",
          main_price: "۱۲۵٬۰۰۰",
          discount: "%۱۶",
          price: "۱۰۵٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
      hot_drinks: [
        {
          id: "29",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-1.jfif",
          title: "ساندویچ کتلت مخصوص",
          detail:
            "سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون",
          main_price: "۲۳۰٬۰۰۰",
          discount: "%۱۸",
          price: "۲۰۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "30",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-2.jfif",
          title: "ساندویچ سوسیس کوکتل",
          detail: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی",
          main_price: "۲۰۵٬۰۰۰",
          discount: "%۳۵",
          price: "۱۶۵٬۰۰۰",
          rate: "4",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "31",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-3.jfif",
          title: "ساندویچ کتلت کدو سبز",
          detail: "کدو سبز، هویج، سیب زمینی، پیاز",
          main_price: "",
          discount: "",
          price: "۱۴۵٬۰۰۰",
          rate: "5",
          score: "۷۲",
          isLiked: false,
        },
        {
          id: "32",
          image:
            "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/menu/s-4.jfif",
          title: "پنینی اسفناج",
          detail:
            " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز",
          main_price: "۲۱۰٬۰۰۰",
          discount: "%۱۵",
          price: "۱۹۰٬۰۰۰",
          rate: "3",
          score: "۷۲",
          isLiked: false,
        },
      ],
    },
  ],
};

// Use jsonServer.router with the embedded database object
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rewrite paths if necessary
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);

server.use((req, res, next) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    router.db.setState(db); // Reset state for any modification
  }
  next();
});

// Start the JSON server
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});

module.exports = server;
