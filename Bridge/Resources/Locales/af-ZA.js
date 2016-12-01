Bridge.merge(new System.Globalization.CultureInfo("af-ZA", true), {
    englishName: "Afrikaans (South Africa)",
    nativeName: "Afrikaans (Suid-Afrika)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "R",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 2,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Son","Maan","Dins","Woen","Dond","Vry","Sat"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""],
        abbreviatedMonthNames: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""],
        amDesignator: "VM.",
        dateSeparator: "/",
        dayNames: ["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dd MMMM yyyy hh:mm:ss tt",
        longDatePattern: "dd MMMM yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],
        monthNames: ["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],
        pmDesignator: "NM.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy/MM/dd",
        shortestDayNames: ["So","Ma","Di","Wo","Do","Vr","Sa"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
