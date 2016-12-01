Bridge.merge(new System.Globalization.CultureInfo("ga-IE", true), {
    englishName: "Irish (Ireland)",
    nativeName: "Gaeilge (Éire)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "nach uimhir",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "Éigríoch dhiúltach",
        positiveInfinitySymbol: "Éigríoch dheimhneach",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Domh","Luan","Máirt","Céad","Déar","Aoi","Sath"],
        abbreviatedMonthGenitiveNames: ["Ean","Feabh","Már","Aib","Bealt","Meith","Iúil","Lún","M.Fómh","D.Fómh","Samh","Noll",""],
        abbreviatedMonthNames: ["Ean","Feabh","Már","Aib","Bealt","Meith","Iúil","Lún","M.Fómh","D.Fómh","Samh","Noll",""],
        amDesignator: "r.n.",
        dateSeparator: "/",
        dayNames: ["Domhnach","Luan","Máirt","Céadaoin","Déardaoin","Aoine","Satharn"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d MMMM yyyy HH:mm:ss",
        longDatePattern: "d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig",""],
        monthNames: ["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig",""],
        pmDesignator: "i.n.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Do","Lu","Má","Cé","De","Ao","Sa"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
