export const getStaticURL = () => process.env.NEXT_PUBLIC_STATIC_URL;
export const OptionsLanguage = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "VietNam",
    value: "vi",
  },
];
export const FooterData = [
  {
    page: "about",
    title: "title",
    itemFooter: [
      {
        label: "whitePaperEN",
        link: "/coming-soon",
      },
      {
        label: "whitePaperTaiwan",
        link: "/coming-soon",
      },
      {
        label: "contact",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "fAQ",
    title: "title",
    itemFooter: [
      {
        label: "feedback",
        link: "/coming-soon",
      },
      {
        label: "termsAndConditions",
        link: "/coming-soon",
      },
    ],
  },
  {
    page: "social",
    title: "title",
    itemFooter: [],
  },
];
export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}
export const DEFAULT_AUTOCLOSE_TOAST = 2000;

export const optionFilterScan = [
  {
    label: "All filter",
    value: "all",
  },
  {
    label: "Address",
    value: "address",
  },
  {
    label: "Tokens",
    value: "tokens",
  },
  {
    label: "Name tags",
    value: "name-tags",
  },
  {
    label: "Labels",
    value: "labels",
  },
  {
    label: "Websites",
    value: "websites",
  },
];

export const character = [
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
  {
    name: "Trần Hưng Đạo",
    star: 5,
  },
];

export const listCharacter = [
  {
    name: "Trần Hưng Đạo",
    url: `TranHungDao.png`,
    rate: 5,
    slug: "tran-hung-dao",
    scale: 0.03,
    value: "",
    introduces: [
      "Mệnh danh “Bình Bắc Đại Nguyên Soái”, là nhà quân sự thiên tài, nhà chính trị vẹn toàn tài đức",
      "Ông nổi tiếng với học vấn rất uyên bác, vừa giỏi văn chương vừa hiểu thấu lục thao tam lược, cưỡi ngựa, bắn cung đều thành thạo",
      "Ba lần cầm quân phá tan quân Nguyên Mông xâm lược nước ta.",
      "Bên cạnh tư tưởng quân sự kiệt xuất, Trần Quốc Tuấn còn nêu một tấm gương về lòng trung nghĩa sáng suốt, biết gạt bỏ mọi hiềm khích riêng để đoàn kết các tôn thất và tướng tá trong triều nhằm phò vua giúp nước, đánh bại kẻ thù.",
    ],
  },
  {
    name: "Phạm Ngũ Lão",
    url: `PhamNguLao.png`,
    rate: 4,
    slug: "pham-ngu-lao",
    scale: 0.03,
    value: "PhamNguLao",
    introduces: [
      `Ông nổi tiếng là người thông minh, văn võ toàn tài bậc nhất, có chí lớn và đạo đức cao`,
      `Dù xuất thân bình dân, nhưng đã trở thành Điện úy Thượng tướng quân, uy danh đức vọng rất lớn, được sánh ngang với Hưng Đạo vương và được hưởng ân điển đặc biệt của triều Trần.`,
      `Cuộc đời và sự nghiệp của Phạm Ngũ Lão đã trở thành huyền thoại lớn trong lịch sử dân tộc,minh chứng cho tư tưởng và nghệ thuật quân sự nhân dân thời Trần. Tài năng xuất chúng đã khiến ông, dù không phải vương hầu, nhưng đều được các triều vua Trần nể trọng.`,
    ],
  },
  {
    name: "Trần Quốc Toản",
    url: `TranQuocToan.png`,
    rate: 3,
    slug: "tran-quoc-toan",
    scale: 0.03,
    value: "",
    introduces: [
      `Tướng tài với sáu chữ vàng "Phá cường địch,  báo hoàng ân" Vị tướng trẻ tuổi mang trong mình lòng yêu nước, lòng quả cảm và ý chí kiên cường`,
      `Trần Quốc Toản với giai thoại nổi tiếng "bóp nát quả cam" tại hội nghị Bình Than do trẻ tuổi không được tham gia để bàn việc quân. Không nản lòng Trần Quốc Toản đã tự tập hợp binh lính, rèn luyện binh khí đứng lên khởi nghĩa chống giặc ngoại xâm.`,
      `Sau với ý chí kiên cường ông được phong tước Hầu Văn Vương và sát nhập binh lính cùng tham gia khởi nghĩa.`,
    ],
  },
  {
    name: "Trần Thủ Độ",
    url: `TranThuDo.png`,
    rate: 5,
    slug: "tran-thu-do",
    scale: 0.03,
    value: "",
    introduces: [
      `Ông nổi tiếng là người thông minh, văn võ toàn tài bậc nhất, có chí lớn và đạo đức cao, nên dù xuất thân bình dân, nhưng đã trở thành Điện úy Thượng tướng quân,uy danh đức vọng rất lớn, được sánh ngang với Hưng Đạo vương và được hưởng ân điển đặc biệt của triều Trần.`,
      `Cuộc đời và sự nghiệp của Phạm Ngũ Lão đã trở thành huyền thoại lớn trong lịch sử dân tộc, minh chứng cho tư tưởng và nghệ thuật quân sự nhân dân thời Trần. Tài năng xuất chúng đã khiến ông, dù không phải vương hầu, nhưng đều được các triều vua Trần nể trọng.`,
    ],
  },
  {
    name: "Dã Tượng",
    url: `DaTuong.png`,
    rate: 4,
    slug: "da-tuong",
    scale: 0.03,
    value: "",
    introduces:[
      `Ông có biệt tài thuần hóa tượng rừng (dã tượng) và chỉ huy đội tượng binh vô cùng tài giỏi, được phong làm "tiết chế binh nhung" Dã Tượng là bậc gia tướng chẳng những giỏi về chiến đấu, mà còn biết đặt lợi ích dân tộc lên trên hết, xem nhẹ bổng lộc triều đình phe phái ban cho.`,
      `Không chỉ có tài dùng binh, Dã Tượng còn là người rất trung nghĩa. Ông đã một lòng trung thành và dám đưa ra lời khuyên Hưng Đạo vương nên bỏ mối thù nhà để toàn tâm dốc sức cứu nước.`
    ]
  },
  {
    name: "Trương Công Hoằng",
    url: `TruongCongHoang.png`,
    rate: 4,
    slug: "truong-cong-hoang",
    scale: 0.03,
    value: "",
    introduces:[
      `Công Hoằng là Trung Hoa tể kiêm Quản long hưng phù Đại tướng Là vị tướng đã giúp ích rất lớn trong công cuộc chống Mông - Nguyên Ông có một người em song sinh nữ là Trương Thị Mỹ Nương. `,
      `Làng Vô Hối thờ người em Trương Thị Mỹ Nương; làng An Lạc thờ người anh Trương Công Hoằng.`
    ]
  },
  {
    name: "Trần Khánh Dư",
    url: `TranKhanhDu.png`,
    rate: 4,
    slug: "tran-khanh-du",
    scale: 0.0125,
    value: "TranKhanhDu",
    introduces:[
      `Là người văn võ song toàn đường gươm của ông được ví như “tuyết rơi, hoa nở” có thể xông vào đám quân cả ngàn người như vào chỗ không người. `,
      `Trần Khánh Dư tiếp tục có công lớn trong hai lần chống quân Nguyên tiếp theo, đặc biệt là đánh tan đạo binh thuyền chở lương thực, khí giới của do Trương Văn Hổ chỉ huy vào tháng 12/1287, làm xoay chuyển tình thế chiến cuộc, dẫn đến thắng lợi cuối cùng, đuổi sạch bóng giặc Nguyên Mông ra khỏi bờ cõi Đại Việt vào năm 1288. `,
      `Đến tháng 5/1312, ông còn theo vua Trần Anh Tông đem quân đi đánh Chiêm Thành, bắt được cả chúa Chiêm Thành là Chế Chí đưa về nước.`
    ]
  },
  {
    name: "Trần Nhật Duật",
    url: `TranNhatDuat.png`,
    rate: 5,
    slug: "tran-nhat-duat",
    scale: 0.03,
    value: "",
    introduces:[
      `Chiêu Văn Vương Trần Nhật Duật là con thứ sáu của vua Trần Thái Tông, tuy là vương tử nhưng đời sống rất xuề xòa, phóng khoáng, dễ tiếp xúc và không câu nệ.`,
      `Ông còn là một nhà nghệ sĩ giỏi và rất say mê âm nhạc, đã sáng tác rất nhiều khúc nhạc, lời ca, điệu múa. Trần Nhật Duật xứng đáng là danh nhân Việt Nam, văn võ toàn tài, có thể được xem là ông tổ của ngành ngoại giao Việt Nam. `,
      `Tuy làm đến chức tể tướng và thái sư nhưng không bao giờ tham lam quyền lực bởi vì sống trong lòng ông là một tinh thần nghệ sĩ độ lượng trong nét khảng khái và nhân hòa.`
    ]
  },
  {
    name: "Trần Quang Khải",
    url: `TranQuangKhai.png`,
    rate: 4,
    slug: "tran-quang-khai",
    scale: 0.03,
    value: "",
    introduces:[
      `Trần Quang Khải vốn có tư chất thông minh, ham học, lại có được Bảng nhãn Lê Văn Hưu làm thầy, nên ông sớm trở thành nhân vật văn võ toàn tài. Không chỉ trực tiếp cầm binh ra trận, toàn thắng nhiều trận đánh lớn. Ông được biết đến nhiều với cương vị một nhà chính trị gia kiệt xuất, với nghệ thuật ứng xử mềm dẻo, khôn khéo nhiều lần giúp nhà Trần giữ vững non sông mà không không gây hiềm khích.`,
      `Trần Quang Khải còn được biết đến là một nhà thơ đặc sắc, có vị trí trong việc nghiên cứu lịch sử tiến trình văn học Việt Nam `
    ]
  },
  {
    name: "Trần Thị Dung",
    url: `TranThiDung.png`,
    rate: 3,
    slug: "tran-thi-dung",
    scale: 0.03,
    value: "",
    introduces:[
      `Linh từ Quốc mẫu Trần Thị Dung là người con gái thông minh, tài ba, gan dạ và có chí lớn, có đầu óc tổ chức phi thường.`,
      `Theo sử cũ, khi Trần Thủ Độ chưa xuất hiện, bà là người cáng đáng toàn bộ sự vất vả gian truân, trầm luân để mở nghiệp nhà Trần. Đến lúc có Trần Thủ Độ trong cung đình, bà đã cộng tác đắc lực với Trần Thủ Độ trong việc khai sinh và xây dựng triều đại nhà Trần, đáp ứng được đòi hỏi xây dựng một đất nước vững mạnh để chống giặc Nguyên - Mông đang lăm le xâm lược Đại Việt.`
    ]
  },
  {
    name: "Công Chúa An Tư",
    url: `CongChuaAnTu.png`,
    rate: 4,
    slug: "cong-chua-an-tu",
    scale: 0.002,
    value: "CongChuaAnTu",
    introduces:[
      `Vì nước, vì dân, công chúa An Tư tuy còn rất trẻ đã từ bỏ cuộc sống nhung lụa trong cung đình, hy sinh thân gái để gánh vác vận mệnh của giang sơn`,
      ` An Tư đã vào trận chiến chỉ có một mình, không một tấc sắt trong tay. Bà hiểu rõ đất nước đang lâm nguy, bản thân không có sự lựa chọn nào khác, công chúa chấp nhận gian khổ, tủi nhục và cái chết để đổi lấy sự bình yên cho Tổ quốc.`
    ]
  },
];
