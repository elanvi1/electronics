$(function () {
  var alteProiecte = [
    "images/alte_proiecte/",
    "Alte Proiecte",
    "Abordăm o gamă vastă de proiecte: surse în comutație reglabile, automatizări industriale, aparatură de laborator, etc.",
    ["placa_pwm_putere.jpg", "Placa PWM putere"],
    [
      "sursa_laborator_comutatie_touchscreen.jpg",
      "Sursa laborator comutatie cu touchscreen",
    ],
  ];

  var alteProiecte_en = [
    "images/alte_proiecte/",
    "Other Projects",
    "We have experience in a vast area of applications: adjustable switching mode power supplies, industrial automation, laboratory equipment, etc.",
    ["placa_pwm_putere.jpg", "Placa PWM putere"],
    [
      "sursa_laborator_comutatie_touchscreen.jpg",
      "Sursa laborator comutatie cu touchscreen",
    ],
  ];

  var anemometru = [
    "images/anemometru/",
    "Anemometru Digital",
    "Anemometru digital cu stocare locală a datelor pe card microSD. Trimite periodic datele prin GSM / GPRS către un server FTP. Softul PC dedicat permite vizualizarea și interpretarea valorilor. Se pot configura alarme la depașirea vitezei vântului. Soluția se poate adapta la orice tip de senzori: pentru agricultură, meteo, acționare pompe, stropitoare, etc.",
    ["histograma.png", "Histograma"],
    ["kit_anemometru.jpg", "Kit anemometru"],
  ];

  var anemometru_en = [
    "images/anemometru/",
    "Digital Anemometer",
    "Digital Anemometer equiped with microSD card for local data storage. It periodically uploads data via GSM / GPRS to a FTP server. The dedicated PC software enables data vizualization and interpretation. Alarms may be set for wind overspeed. This solution can be adapted to any type of sensors: for agriculture, meteorological, actuators (pumps, water sprayers, motors), etc.",
    ["histograma.png", "Histograma"],
    ["kit_anemometru.jpg", "Kit anemometru"],
  ];


  var automatizari = [
    "images/automatizari_industriale/",
    "Automatizări Industriale",
    "Proiectăm, executăm și modernizăm automatizări pentru diverse mașini industriale. Oferim interfețe cu utilizatorul flexibile și ușor de utilizat.",
    ["automatizare_masina.jpg", "Automatizare masina ansamblu"],
    ["program_masina.png", "Program masina"],
  ];

  var automatizari_en = [
    "images/automatizari_industriale/",
    "Industrial Automation",
    "We design, build and modernize the automation system for various types of industrial machines. We offer flexible and easy to use Graphical User Interfaces.",
    ["automatizare_masina.jpg", "Automatizare masina ansamblu"],
    ["program_masina.png", "Program masina"],
  ];

  var controller_presiune = [
    "images/controlere_presiune/",
    "Controller Presiune",
    "In domeniul cromatografiei de gaz, am dezvoltat un modul de control al presiunii cu valvă proporțională și senzor digital calibrat. Acceptă conexiuni pentru tuburi capilare 1/16\"; are interfață RS 485 ce permite definirea digitală a ciclului de funcționare. Utilizatorul poate defini orice număr de rampe și paliere pentru presiune.",
    ["modul_cromatografie.jpg", "Modul cromatografie"],
  ];

  var controller_presiune_en = [
    "images/controlere_presiune/",
    "Pressure Controller",
    "In the area of gas chromatography, we developed a pressure control module equipped with a proportional valve and a factory calibrated digital pressure sensor. It is designed for 1/16\" capillary tubing; has RS 485 protocol which allows to digitally define the work cycle. The user may define any number of ramps and dwells for the pressure.",
    ["modul_cromatografie.jpg", "Modul cromatografie"],
  ];

  var cromatografie = [
    "images/cromatografie_de_gaz/",
    "Cromatografie de gaz",
    "Am dezvoltat un sistem cromatograf de gaz cu detecție în lumină ultravioletă. Acesta este dedicat analizei aerului ambiant și determinării prezenței compușilor organici volatili. Metoda noastră permite realizarea unei analize calitative rapide a compoziției unui amestec de gaze. În funcție de natura substanțelor prezente în amestec, se pot detecta concentrații în ordinul de mărime ppb.",
    ["curatare_desorptie.jpg", "Curatare desorptie"],
    ["gaz_cromatograf_fata.jpg", "Cromatograf gaz fata"],
    ["spectrograma_1.jpeg", "Spectograma"],
  ];

  var cromatografie_en = [
    "images/cromatografie_de_gaz/",
    "Gas Chromatography",
    "We developed a gas chromatograph system with ultraviolet light detection. This device is dedicated for ambient air analysis and for the detection of volatile organic compounds. Our method allows for a fast qualitative analysis of a test sample. Depending on the nature of the substances present in the mixture, concentrations in the range of ppb can be detected.",
    ["curatare_desorptie.jpg", "Curatare desorptie"],
    ["gaz_cromatograf_fata.jpg", "Cromatograf gaz fata"],
    ["spectrograma_1.jpeg", "Spectograma"],
  ];

  var lampa_UV_dezinfectanta = [
    "images/lampi_sterilizare_uv/",
    "Lămpi UV sterilizare ",
    "Oferim lămpi UV-C bactericide. Pot fi mobile (pe stand, cu reflector) sau baghete. Lămpile pe stand pot fi configurate în orice combinație de: 1 x 30 W, 2 x 30 W, 1 x 55 W, 2 x 55 W. Se recomandă folosirea unei prize cu telecomandă pentru a se porni/opri de la distanță. ATENȚIE: Nu vă expuneți la radiațiile UV!",
    ["lampa_sterilizare_uv_mobila.jpeg", "Lampa UV mobila"],
    ["lampa_sterilizare_uv_portabila.jpeg", "Lampa UV portabila"]
  ];

  var lampa_UV_dezinfectanta_en = [
    "images/lampi_sterilizare_uv/",
    "UV Sterilization Lamps ",
    "We offer UV-C bactericidal lamps. They can be mobile(on a stand, with reflector) or hand held. The lamps on the stand may be configured in any combination of the following: 1 x 30 W, 2 x 30 W, 1 x 55 W, 2 x 55 W. It is recommended to use together with a remote controlled plug. CAUTION: Do not expose yourself or animals to UV radiation!",
    ["lampa_sterilizare_uv_mobila.jpeg", "Lampa UV mobila"],
    ["lampa_sterilizare_uv_portabila.jpeg", "Lampa UV portabila"]
  ];

  var lumini = [
    "images/jocuri_lumini/",
    "Jocuri Lumini",
    "Executăm animații luminoase RGB sau monocrome pentru diverse aplicații. Modulul de comandă se conectează la WiFi și permite configurarea diverșilor parametri ai jocurilor luminoase. Utilizatorul are la dispoziție o pagină web accesibilă atât de pe telefon, cât și de pe PC pentru efectuarea setărilor.",
    ["trepte lumini_rgb.jpg", "Trepte cu lumini"],
  ];

  var lumini_en = [
    "images/jocuri_lumini/",
    "Light Shows",
    "Our company can provide RGB or monochrome lighting animations for various applications. The electronic control module connects to WiFi. The user can connect via PC or mobile phone to a dedicated web-page in order to configure the device.",
    ["trepte lumini_rgb.jpg", "Trepte cu lumini"],
  ];

  var energieRegenerabila = [
    "images/monitorizare_energie_regenerabila/",
    "Monitorizare Energie Regenerabilă",
    "Oferim soluții pentru monitorizarea echipamentelor din domeniul producerii energiei regenerabile. Se pot configura și acționări în funcție de parametrii sistemului, spre exemplu acționarea frânei la turbinele eoliene, deconectarea bateriilor încărcate, etc.",
    ["ansamblu_monitorizare_2.jpeg", "Ansamblu monitorizare"],
    ["panou_monitorizare_enegie_regenerabile.jpg", "Panou monitorizare"]
  ]

  var energieRegenerabila_en = [
    "images/monitorizare_energie_regenerabila/",
    "Renewable Energy Monitoring",
    "Monitoring equipment for renewable energy production is part of our portofolio. It is possible to configure actuators to respond to different system parameters, for example: trigger the wind turbine brakes at high wind or no load, disconnecting charged batteries, etc.",
    ["ansamblu_monitorizare_2.jpeg", "Ansamblu monitorizare"],
    ["panou_monitorizare_enegie_regenerabile.jpg", "Panou monitorizare"]
  ]

  var pcb = [
    "images/pcb/",
    "PCB",
    "Design, execuție PCB pentru prototipuri și serie mică. Tehnologia de fabricație: expunere UV și corodare.",
    ["pcb_2.jpeg", "PCB"],
    ["pcb_presiune.jpeg", "PCB presiune"]
  ];

  var pcb_en = [
    "images/pcb/",
    "PCB",
    "Design, manufacturing of PCBs for prototypes and small series. Fabrication technology: UV exposure and corrosion.",
    ["pcb_2.jpeg", "PCB"],
    ["pcb_presiune.jpeg", "PCB presiune"]
  ];

  var programator_izolat = [
    "images/programatoare_izolate/",
    "Programatoare Izolate",
    "Modul ICSP izolat. USB - UART. Este echipat cu un comutator pentru selecția între modul izolat și neizolat. Compatibil Arduino. Poate fi folosit pentru programarea și comunicarea cu microcontrollere AVR.",
    ["programator_izolat_usb.jpeg", "Programator Izolat USB"],
  ];

  var programator_izolat_en = [
    "images/programatoare_izolate/",
    "Isolated Programmer",
    "ICSP isolated module. USB - UART. It comes with a switch for selecting between isolated and non-isolated mode. Arduino compatible. It can be used for communication with and programming of AVR microcontrollers.",
    ["programator_izolat_usb.jpeg", "Programator Izolat USB"],
  ];

  var retea_wireless_sensori_IOT = [
    "images/retea_sensori_wireless/",
    "Rețea Senzori Wireless",
    "Am conceput o soluție radio de interconectare a diverselor echipamente (senzori, motoare, acționări, etc.) pentru distanțe mari.",
    ["IMAG1481.jpg", "Rețea Wireless Senzori"],
  ];

  var retea_wireless_sensori_IOT_en = [
    "images/retea_sensori_wireless/",
    "Wireless Sensor Network",
    "We designed a radio solution for equipment interconnectivity over large distances. It is applicable to sensors, motors, other actuators, etc.",
    ["IMAG1481.jpg", "Rețea Wireless Senzori"],
  ];


  var imageCategories = [
    anemometru,
    automatizari,
    controller_presiune,
    cromatografie,
    lampa_UV_dezinfectanta,
    lumini,
    energieRegenerabila,
    pcb,
    programator_izolat,
    retea_wireless_sensori_IOT,
    alteProiecte,
  ];

  var url = window.location.pathname;

  if(url.includes('en/')){
    var imageCategories = [
      anemometru_en,
      automatizari_en,
      controller_presiune_en,
      cromatografie_en,
      lampa_UV_dezinfectanta_en,
      lumini_en,
      energieRegenerabila_en,
      pcb_en,
      programator_izolat_en,
      retea_wireless_sensori_IOT_en,
      alteProiecte_en,
    ];
  }

  CreatePaths(imageCategories);

  var ids = { i: 3, j: 1, cur: { i: 3, j: 0 } };

  var myInterval = { interval: ForInterval(imageCategories, ids) };

  SetUpThmbs(imageCategories, ids, myInterval);

  AddingEventListeners(imageCategories, ids, myInterval);
});

function ChangeImg(ids, el, imageCategories, prev, changeCateg) {
  if (prev === true) {
    if (ids.cur.i >= 4) {
      ids.i = ids.cur.i - 1;
      ids.j = ids.cur.j;
    } else if (ids.cur.i === 3) {
      ids.j = ids.cur.j > 0 ? ids.cur.j - 1 : imageCategories.length - 1;
      ids.i = imageCategories[ids.j].length - 1;
    }
  }

  if (changeCateg === "next") {
    ids.i = 3;
    ids.j = ids.cur.j < imageCategories.length - 1 ? ids.cur.j + 1 : 0;
  } else if (changeCateg === "prev") {
    ids.i = 3;
    ids.j = ids.cur.j > 0 ? ids.cur.j - 1 : imageCategories.length - 1;
  }

  if (
    (ids.i === 3 && !prev) ||
    (ids.cur.i === 3 && prev) ||
    ids.cur.j !== ids.j
  ) {
    ContentChange(imageCategories, ids.j);
  }

  ids.cur.i = ids.i;
  ids.cur.j = ids.j;

  ids.thumbs = CreateThumbnailsIds(imageCategories, ids.cur);
  ChangeThumbnails(imageCategories, ids.thumbs);

  $(el).attr({
    src: imageCategories[ids.j][0] + imageCategories[ids.j][ids.i][0],
    alt: imageCategories[ids.j][ids.i][1],
  });
  $(el).delay(100).fadeTo(150, 1);

  if (ids.i === imageCategories[ids.j].length - 1) {
    ids.i = 3;
    if (ids.j === imageCategories.length - 1) {
      ids.j = 0;
    } else {
      ids.j++;
    }
  } else {
    ids.i++;
  }
}

function ContentChange(imageCategories, j) {
  $("#mainTitle").fadeTo(150, 0, function () {
    $(this).text(imageCategories[j][1]).fadeTo(150, 1);
  });
  $("#mainText").fadeTo(150, 0, function () {
    $(this).text(imageCategories[j][2]).fadeTo(150, 1);
  });
}

function ForInterval(imageCategories, ids) {
  return setInterval(function () {
    $("#mainImage").fadeTo(150, 0, function () {
      ChangeImg(ids, this, imageCategories);
    });
  }, 60000);
}

function ForClick(myInterval, ids, imageCategories, prev, changeCateg) {
  return function () {
    $(".myTooltip").css({ display: "none" });
    console.log('I was here')

    $("#mainImage").fadeTo(150, 0, function () {
      ChangeImg(ids, this, imageCategories, prev, changeCateg);

      clearInterval(myInterval.interval);

      myInterval.interval = ForInterval(imageCategories, ids);
    });
  };
}

function CreateThumbnailsIds(imageCategories, cur) {
  const firstBefore = CalcIdsBefore(imageCategories, cur);
  const secondBefore = CalcIdsBefore(imageCategories, {
    i: firstBefore[0],
    j: firstBefore[1],
  });
  const thirdBefore = CalcIdsBefore(imageCategories, {
    i: secondBefore[0],
    j: secondBefore[1],
  });
  const firstAfter = CalcIdsAfter(imageCategories, cur);
  const secondAfter = CalcIdsAfter(imageCategories, {
    i: firstAfter[0],
    j: firstAfter[1],
  });
  const thirdAfter = CalcIdsAfter(imageCategories, {
    i: secondAfter[0],
    j: secondAfter[1],
  });

  return {
    0: {
      i: thirdBefore[0],
      j: thirdBefore[1],
    },
    1: {
      i: secondBefore[0],
      j: secondBefore[1],
    },
    2: {
      i: firstBefore[0],
      j: firstBefore[1],
    },
    3: {
      i: cur.i,
      j: cur.j,
    },
    4: {
      i: firstAfter[0],
      j: firstAfter[1],
    },
    5: {
      i: secondAfter[0],
      j: secondAfter[1],
    },
    6: {
      i: thirdAfter[0],
      j: thirdAfter[1],
    },
  };
}

function CalcIdsBefore(imageCategories, cur) {
  const lastCategIndex = imageCategories.length - 1;
  const iFirstBefore =
    cur.i - 1 >= 3
      ? cur.i - 1
      : cur.j > 0
      ? imageCategories[cur.j - 1].length - 1
      : imageCategories[lastCategIndex].length - 1;
  const jFirstBefore =
    cur.i - 1 >= 3 ? cur.j : cur.j > 0 ? cur.j - 1 : lastCategIndex;
  return [iFirstBefore, jFirstBefore];
}

function CalcIdsAfter(imageCategories, cur) {
  const lastCategIndex = imageCategories.length - 1;
  const iFirstAfter =
    cur.i + 1 <= imageCategories[cur.j].length - 1 ? cur.i + 1 : 3;
  const jFirstAfter =
    cur.i + 1 <= imageCategories[cur.j].length - 1
      ? cur.j
      : cur.j < lastCategIndex
      ? cur.j + 1
      : 0;
  return [iFirstAfter, jFirstAfter];
}

function ChangeThumbnails(imageCategories, idsThumb) {
  var thumbnails = $(".card-footer .row").children();

  for (let thumbnail in thumbnails) {
    for (let id in idsThumb) {
      if (id === thumbnail) {
        let path = imageCategories[idsThumb[id].j][0].replace(
          "medium",
          "small"
        );

        $(thumbnails[thumbnail])
          .children()
          .first()
          .attr({
            src: path + imageCategories[idsThumb[id].j][idsThumb[id].i][0],
            alt: imageCategories[idsThumb[id].j][idsThumb[id].i][1],
          })
          .data({ ids: { i: idsThumb[id].i, j: idsThumb[id].j } });
      }
    }
  }
}

function CreatePaths(imageCategories) {
  var url = window.location.pathname;

  imageCategories.forEach(function (cur) {
    if (url.includes("/en/")) {
      cur[0] = "../" + cur[0];
    }

    if ($(window).width() <= 1920) {
      cur[0] += "medium/fullHD/";
    } else {
      cur[0] += "medium/4k/";
    }
  });

  $("#mainImage").attr({
    src: imageCategories[0][0] + imageCategories[0][3][0],
    alt: imageCategories[0][3][1],
  }).on('load',function(){
    $(".card-body .fa-chevron-right , .card-body .fa-chevron-left").css({
      paddingTop: $("#mainImage").height()/2 - $('.card-body .fa-chevron-left ').height()/2,
      paddingBottom: $("#mainImage").height()/2 - $('.card-body .fa-chevron-left ').height()/2
    })
  });
}

function SetUpThmbs(imageCategories, ids, myInterval) {
  var thumbIds = CreateThumbnailsIds(imageCategories, ids.cur);
  ids.thumbs = thumbIds;

  ChangeThumbnails(imageCategories, thumbIds);

  var thumbnails = $(".card-footer .row").children();

  for (let thumbnail in thumbnails) {
    for (let id in thumbIds) {
      if (id === thumbnail) {
        $(thumbnails[thumbnail])
          .children()
          .first()
          .click(function () {
            ids.i = $(this).data("ids").i;
            ids.j = $(this).data("ids").j;

            ForClick(myInterval, ids, imageCategories)();
          });
      }
    }
  }
}

function AddingEventListeners(imageCategories, ids, myInterval) {
  $(".card-body .fa-chevron-right, .card-footer .fa-chevron-right").click(
    ForClick(myInterval, ids, imageCategories, false)
  );

  $(".card-body .fa-chevron-left , .card-footer .fa-chevron-left").click(
    ForClick(myInterval, ids, imageCategories, true)
  );

  $(".card-header .fa-chevron-right").click(
    ForClick(myInterval, ids, imageCategories, false, "next")
  );

  $(".card-header .fa-chevron-left").click(
    ForClick(myInterval, ids, imageCategories, false, "prev")
  );

  $(".fa-chevron-left,.fa-chevron-right").on({
    mousemove: function (e) {
      let el = this;
      $(".myTooltip")
        .css({
          left: e.pageX-50,
          top: e.pageY - 35,
          display: "block",
        })
        .text($(el).data("info"));
    },
    mouseleave: function () {
      $(".myTooltip").css({ display: "none" });
    },
  });
}
