$(function () {
  var alteProiecte = [
    "images/alte_proiecte/",
    ["placa_pwm_putere.jpg", "Placa PWM putere"],
    ["hmi_arduino.jpeg", "HMI Arduino"],
    [
      "sursa_laborator_comutatie_touchscreen.jpg",
      "Sursa laborator comutatie cu touchscreen",
    ],
    ["sursa_comutatie.jpg", "Sursa comutatie"],
  ];

  var alteProiecte_en = [
    "images/alte_proiecte/",
    ["placa_pwm_putere.jpg", "PWM Power Board"],
    ["hmi_arduino.jpeg", "Arduino HMI"],
    [
      "sursa_laborator_comutatie_touchscreen.jpg",
      "Desk Power Supply with Touchscreen",
    ],
    ["sursa_comutatie.jpg", "Flyback SMPS"],
  ];

  var anemometru = [
    "images/anemometru/",
    ["anemometru.jpeg", "Anemometru montat"],
    ["histograma.png", "Histograma"],
    ["sensor_anemometru.jpeg", "Sensor anemometru"],
    ["kit_anemometru.jpg", "Kit anemometru"],
  ];

  var anemometru_en = [
    "images/anemometru/",
    ["anemometru.jpeg", "Installed Anemometer"],
    ["histograma.png", "Histogram"],
    ["sensor_anemometru.jpeg", "Digital Anemometer Sensor"],
    ["kit_anemometru.jpg", "Digital Anemometer - Kit"],
  ];

  var automatizari = [
    "images/automatizari_industriale/",
    ["automatizare_masina.jpg", "Automatizare masina ansamblu"],
    ["automatizare_masina_2.jpeg", "Automatizare masina ansamblu"],
    ["automatizare_masina_3.jpg", "Automatizare masina detaliu"],
    ["program_masina.png", "Program masina"],
    ["control_pompa.jpeg", "Control pompa"],
    ["masina_perforat_profile.jpeg", "Masina perforat profile"],
    ["panou_control.jpg", "Panou control"],
  ];

  var automatizari_en = [
    "images/automatizari_industriale/",
    ["automatizare_masina.jpg", "Automation Panel"],
    ["automatizare_masina_2.jpeg", "Automation Panel"],
    ["automatizare_masina_3.jpg", "Automation Detail"],
    ["program_masina.png", "Machine Program"],
    ["control_pompa.jpeg", "Pump Control"],
    ["masina_perforat_profile.jpeg", "Punching Machine"],
    ["panou_control.jpg", "Control Panel"],
  ];

  var controller_presiune = [
    "images/controlere_presiune/",
    ["bloc_presiune_1.jpeg", "Bloc presiune 1"],
    ["bloc_presiune_2.jpeg", "Bloc presiune 2"],
    ["bloc_presiune_3.jpeg", "Bloc presiune 3"],
    ["control_presiune_cromatografie.jpg", "Control presiune cromatografie"],
    ["modul_cromatografie.jpg", "Modul cromatografie"],
    ["placi_control_presiune.jpeg", "Placi control presiune"],
  ];

  var controller_presiune_en = [
    "images/controlere_presiune/",
    ["bloc_presiune_1.jpeg", "Pressure Block"],
    ["bloc_presiune_2.jpeg", "Aluminium Pressure Block"],
    ["bloc_presiune_3.jpeg", "Pressure Block"],
    ["control_presiune_cromatografie.jpg", "Chromatography Pressure Control"],
    ["modul_cromatografie.jpg", "Chromatography Pressure Modules"],
    ["placi_control_presiune.jpeg", "Pressure PCBs"],
  ];

  var cromatografieDeGaz = [
    "images/cromatografie_de_gaz/",
    ["coloana_cromatografie.jpg", "Coloana cromatografie"],
    ["cromatograma_1.jpeg", "Cromatograma 1"],
    ["cromatograma_2.jpeg", "Cromatograma 2"],
    ["cuptor_desorptie.jpg", "Cuptor desorptie"],
    ["cuptor_desorptie_filtru.jpeg", "Filtru cuptor desorptie "],
    ["cuptor_valva.jpeg", "Cuptor valva"],
    ["curatare_desorptie.jpg", "Curatare desorptie"],
    ["dispozitiv_prelevare.jpg", "Dispozitiv prelevare"],
    ["gaz_cromatograf spate.jpg", "Spate gaz cromatograf"],
    ["gaz_cromatograf.jpg", "Gaz cromatograf"],
    ["gaz_cromatograf_3.jpg", "Gaz cromatograf 3"],
    ["gaz_cromatograf_fata.jpg", "Fata gaz cromatograf"],
    ["interfata.jpeg", "Interfata"],
    ["mecanism_cuptor_desorptie.jpg", "Mecanism cuptor"],
    ["placa_intefata.jpeg", "Placa interfata"],
    ["prelevare_mostre_desorptie.jpg", "Prelevare mostre"],
    ["prelevator_mostre_desorptie.jpeg", "Prelevator mostre"],
    ["spectrograma_1.jpeg", "Spectograma 1"],
    ["spectrograma_2.jpeg", "Spectograma 2"],
    ["tub_desorptie.jpeg", "Tub desorptie"],
    ["valva_4_porturi.jpg", "Valva 4 porturi"],
    ["valva_4_porturi_cuptor.jpg", "Valva 4 porturi cuptor"]
  ];

  var cromatografieDeGaz_en = [
    "images/cromatografie_de_gaz/",
    ["coloana_cromatografie.jpg", "Chromatography Column"],
    ["cromatograma_1.jpeg", "Chromatogram 1"],
    ["cromatograma_2.jpeg", "Chromatogram 2"],
    ["cuptor_desorptie.jpg", "Desorption Oven"],
    ["cuptor_desorptie_filtru.jpeg", "Desorption Oven with Filter"],
    ["cuptor_valva.jpeg", "Valve Oven"],
    ["curatare_desorptie.jpg", "Tube Cleaner"],
    ["dispozitiv_prelevare.jpg", "Sampler"],
    ["gaz_cromatograf spate.jpg", "GC-UV"],
    ["gaz_cromatograf.jpg", "GC-UV"],
    ["gaz_cromatograf_3.jpg", "GC-UV"],
    ["gaz_cromatograf_fata.jpg", "GC-UV"],
    ["interfata.jpeg", "UI"],
    ["mecanism_cuptor_desorptie.jpg", "Mechanism"],
    ["placa_intefata.jpeg", "UI PCB"],
    ["prelevare_mostre_desorptie.jpg", "Sampler"],
    ["prelevator_mostre_desorptie.jpeg", "Sampler"],
    ["spectrograma_1.jpeg", "Spectogram 1"],
    ["spectrograma_2.jpeg", "Spectogram 2"],
    ["tub_desorptie.jpeg", "Desorption Tube"],
    ["valva_4_porturi.jpg", "4-Way Valve"],
    ["valva_4_porturi_cuptor.jpg", "4-Way Valve Oven"]
  ];

  var lumini = [
    "images/jocuri_lumini/",
    ["trepte lumini_rgb.jpg", "Trepte cu lumini"],
  ]

  var lumini_en = [
    "images/jocuri_lumini/",
    ["trepte lumini_rgb.jpg", "RGB Animation"],
  ]

  var lampa_UV_dezinfectanta = [
    "images/lampi_sterilizare_uv/",
    ["cutie_sterilizare_uv.jpg", "Cutie sterilizare"],
    ["lampa_sterilizare_uv_mobila.jpeg", "Lampa UV mobila"],
    ["lampa_sterilizare_uv_portabila.jpeg", "Lampa UV portabila"],
    ["lampi_sterilizare_uv (2).jpeg", "Lampi UV 1"],
    ["lampi_sterilizare_uv.jpeg", "Lampi UV 2"]
  ];

  var lampa_UV_dezinfectanta_en = [
    "images/lampi_sterilizare_uv/",
    ["cutie_sterilizare_uv.jpg", "UV Sterilization Box"],
    ["lampa_sterilizare_uv_mobila.jpeg", "UV Mobile Lamp"],
    ["lampa_sterilizare_uv_portabila.jpeg", "UV Wand"],
    ["lampi_sterilizare_uv (2).jpeg", "UV Lamps 1"],
    ["lampi_sterilizare_uv.jpeg", "UV Lamps 2"]
  ];

  var monitorizareEnergie = [
    "images/monitorizare_energie_regenerabila/",
    ["ansamblu_monitorizare_1.jpeg", "Ansamblu monitorizare 1"],
    ["ansamblu_monitorizare_2.jpeg", "Ansamblu monitorizare 2"],
    ["modul_comutare.jpeg", "Modul comutare"],
    ["modul_gsm_monitorizare.jpg", "Modul GSM monitorizare"],
    ["panou_monitorizare_enegie_regenerabile.jpg", "Panou monitorizare"],
  ];

  var monitorizareEnergie_en = [
    "images/monitorizare_energie_regenerabila/",
    ["ansamblu_monitorizare_1.jpeg", "Monitoring System"],
    ["ansamblu_monitorizare_2.jpeg", "Monitoring System"],
    ["modul_comutare.jpeg", "Power Selection Module"],
    ["modul_gsm_monitorizare.jpg", "GSM Module"],
    ["panou_monitorizare_enegie_regenerabile.jpg", "Wind Turbine Panel"],
  ];

  var pcb = [
    "images/pcb/",
    ["ansamblu_pcb.jpeg", "Ansamblu PCB 1"],
    ["ansamblu_pcb_2.jpeg", "Ansamblu PCB 2"],
    ["ansamblu_pcb_3.jpeg", "Ansamblu PCB 3"],
    ["modul_presiune.jpeg", "Modul presiune"],
    ["pcb_1.jpeg", "PCB 1"],
    ["pcb_2.jpeg", "PCB 2"],
    ["pcb_control_gaz_cromatograf.jpeg", "PCB cromatograf"],
    ["pcb_control_presiune.jpeg", "PCB control presiune"],
    ["pcb_control_temperatura.jpeg", "PCB control temp"],
    ["pcb_presiune.jpeg", "PCB presiune"],
    ["sursa_comutatie.jpg", "Sursa comutatie"]
  ];

  var pcb_en = [
    "images/pcb/",
    ["ansamblu_pcb.jpeg", "PCB Stack"],
    ["ansamblu_pcb_2.jpeg", "PCB Stack - Sensor Side"],
    ["ansamblu_pcb_3.jpeg", "PCB Stack - Bus"],
    ["modul_presiune.jpeg", "Pressure Module"],
    ["pcb_1.jpeg", "PCB 1"],
    ["pcb_2.jpeg", "PCB 2"],
    ["pcb_control_gaz_cromatograf.jpeg", "PCB GC-UV Analog"],
    ["pcb_control_presiune.jpeg", "PCB GC-UV Digital"],
    ["pcb_control_temperatura.jpeg", "PCB Pt-100"],
    ["pcb_presiune.jpeg", "PCB Pressure"],
    ["sursa_comutatie.jpg", "SMPS"]
  ];

  var programator_izolat = [
    "images/programatoare_izolate/",
    ["programator_izolat.jpeg", "Programator izolat"],
    ["programator_izolat_arduino.jpeg", "Programator izolat arduino"],
    ["programator_izolat_usb.jpeg", "Programator izolat usb"],
  ];

  var programator_izolat_en = [
    "images/programatoare_izolate/",
    ["programator_izolat.jpeg", "Isolated Programmer"],
    ["programator_izolat_arduino.jpeg", "Isolated Programmer - Arduino"],
    ["programator_izolat_usb.jpeg", "Isolated Programmer - USB"],
  ];

  var retea_wireless_sensori_IOT = [
    "images/retea_sensori_wireless/",
    ["IMAG1481.jpg", "Module NRF24L01"],
    ["modul_gsm.jpg", "Modul GSM"],
  ];

  var retea_wireless_sensori_IOT_en = [
    "images/retea_sensori_wireless/",
    ["IMAG1481.jpg", "NRF24L01 Modules"],
    ["modul_gsm.jpg", "GSM Module"],
  ];

  var width = { w: $(window).width() };

  var currentArray = [];

  var url = window.location.pathname;

  if (url.includes("anemometru")) {
    if(url.includes('en/')){
      currentArray = anemometru_en;
    }else{
      currentArray = anemometru;
    }
  } else if (url.includes("controller_presiune")) {
    if(url.includes('en/')){
      currentArray = controller_presiune_en;
    }else{
      currentArray = controller_presiune;
    }
  } else if (url.includes("cromatografieDeGaz")) {
    if(url.includes('en/')){
      currentArray = cromatografieDeGaz_en;
    }else{
      currentArray = cromatografieDeGaz;
    }
  } else if (url.includes("lampa_UV_dezinfectanta")) {
    if(url.includes('en/')){
      currentArray = lampa_UV_dezinfectanta_en;
    }else{
      currentArray = lampa_UV_dezinfectanta;
    }
  } else if (url.includes("pcb")) {
    if(url.includes('en/')){
      currentArray = pcb_en;
    }else{
      currentArray = pcb;
    }
  } else if (url.includes("programator_izolat")) {
    if(url.includes('en/')){
      currentArray = programator_izolat_en;
    }else{
      currentArray = programator_izolat;
    }
  } else if (url.includes("retea_wireless_sensori_IOT")) {
    if(url.includes('en/')){
      currentArray = retea_wireless_sensori_IOT_en;
    }else{
      currentArray = retea_wireless_sensori_IOT;
    }
  } else if (url.includes("alte_proiecte")) {
    if(url.includes('en/')){
      currentArray = alteProiecte_en;
    }else{
      currentArray = alteProiecte;
    }
  } else if (url.includes("automatizari_industriale")) {
    if(url.includes('en/')){
      currentArray = automatizari_en;
    }else{
      currentArray = automatizari;
    }
  } else if (url.includes("lumini")) {
    if(url.includes('en/')){
      currentArray = lumini_en;
    }else{
      currentArray = lumini;
    }
  } else if (url.includes("monitorizare_energie_regenerabila")) {
    if(url.includes('en/')){
      currentArray = monitorizareEnergie_en;
    }else{
      currentArray = monitorizareEnergie;
    }
  }

  setUpImgs(currentArray, url);

  var dir = { next: 3, prev: currentArray.length - 1 };

  setUpEvents(width, currentArray, dir);
});

function changeDir(cur, dir, currentArray) {
  if (cur === currentArray.length - 1) {
    dir.next = 1;
  } else {
    dir.next = cur + 1;
  }

  if (cur === 1) {
    dir.prev = currentArray.length - 1;
  } else {
    dir.prev = cur - 1;
  }
}

function addClickEvents(currentArray, dir) {
  $(".categImg")
    .data({ hasEvent: true })
    .click(function (e) {
      let id = 1;

      currentArray.forEach((cur, i) => {
        if (cur[0] === $(this).data("name")) {
          id = i;

          changeDir(id, dir, currentArray);

          $(".modalImg").attr({
            src: currentArray[0] + cur[0],
            alt: cur[1],
          }).on('load',function(){
            $(".myModal .fa-chevron-right, .myModal .fa-chevron-left").css({
              paddingTop: $(".modalImg").height()/2 - $('.myModal .fa-chevron-right').height()/2,
              paddingBottom:$(".modalImg").height()/2 - $('.myModal .fa-chevron-right').height()/2
            })
          });

          $(".myModal").css({
            transform: "translateY(0)",
            // width: $(this).width() > $(this).height() ? '70%' : 'auto',
            // height: $(this).height() > $(this).width() ? 70/100 * $(window).height() : 'auto',
          });

          // e.pageY < $(window).height() ? $(document).height() - $(window).height() + 5/100 * $(window).height() : $(document).height() - e.pageY

          // bottom: e.pageY < $(window).height() ? '15%' : -(e.pageY-$(window).height())

          $(".backdrop").show();
        }
      }, this);
    });
}

function directionClick(currentArray, dir, direction) {
  return function () {
    const curId = direction === "next" ? dir.next : dir.prev;

    $(".modalImg").attr({
      src: currentArray[0] + currentArray[curId][0],
      alt: currentArray[curId][1],
    })

    // $('.myModal').css({
    //   width: 'auto',
    //   height: 'auto'
    // })

    // $('.myModal').css({
    //   width: $('.myModal').width() > $('.myModal').height() ? '70%' : 'auto',
    //   height: $('.myModal').height() > $('.myModal').width() ? 70/100 * $(window).height() : 'auto'
    // })

    changeDir(curId, dir, currentArray);
  };
}

function removeTooltipOnClick() {
  $(this).data({ hasRemoveTT: true });
  $(".myTooltip").css({ display: "none" });
}

function toggleShowModal() {
  $(".backdrop").toggle();
  $(".myModal").css({ transform: "translateY(-1000vh)" });
}

function setUpImgs(currentArray, url) {
  if (url.includes("/en/")) {
    currentArray[0] = "../" + currentArray[0];
  }

  if ($(window).width() <= 1920) {
    currentArray[0] += "large/fullHD/";
  } else {
    currentArray[0] += "large/4K/";
  }

  $(".categImg").each(function (i) {
    $(this)
      .attr({
        src:
          currentArray[0].replace("large", "medium") + currentArray[i + 1][0],
        alt: currentArray[i + 1][1],
      })
      .data({ name: currentArray[i + 1][0] });
  });
}

function setUpEvents(width, currentArray, dir) {
  $(window).resize(function () {
    width.w = $(window).width();

    if (width.w >= 992) {
      if (!$(".categImg").data("hasEvent")) {
        addClickEvents(currentArray, dir);
      }
      $(".categImg").each(function () {
        if (!$(this).data("hasRemoveTT")) {
          $(this).click(removeTooltipOnClick);
        }
      });
    } else {
      $(".categImg").each(function () {
        if ($(this).data("hasEvent") === true) {
          $(this).data({ hasEvent: false });
          $(this).off("click");
          $(this).click(removeTooltipOnClick);
        }
      });
    }
  });

  $(".categImg").click(removeTooltipOnClick);

  if (width.w >= 992) {
    addClickEvents(currentArray, dir);
  }

  $(".backdrop").click(toggleShowModal);

  $(document).keydown(function (e) {
    if (e.which === 27 && $(".backdrop").css("display") !== "none") {
      toggleShowModal();
    }
  });

  $(".myModal .fa-chevron-right").click(
    directionClick(currentArray, dir, "next")
  );

  $(".myModal .fa-chevron-left").click(
    directionClick(currentArray, dir, "prev")
  );

  $(".categImg").on({
    mousemove: function (e) {
      let el = this;
      $(".myTooltip")
        .css({
          left: e.pageX,
          top: e.pageY + 22,
          display: "block",
        })
        .text($(el).attr("alt"));
    },
    mouseleave: function () {
      $(".myTooltip").css({ display: "none" });
    },
  });
}
