Bridge.merge(new System.Globalization.CultureInfo("ku-Arab", true), {
    englishName: "Central Kurdish",
    nativeName: "کوردیی ناوەڕاست",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "ناژمارە",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "٪",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 2,
        percentNegativePattern: 2,
        currencySymbol: "د.ع.‏",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 2,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],
        abbreviatedMonthGenitiveNames: ["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم",""],
        abbreviatedMonthNames: ["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم",""],
        amDesignator: "پ.ن",
        dateSeparator: "/",
        dayNames: ["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, dd MMMM, yyyy hh:mm:ss tt",
        longDatePattern: "dddd, dd MMMM, yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم",""],
        monthNames: ["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم",""],
        pmDesignator: "د.ن",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy/MM/dd",
        shortestDayNames: ["ی","د","س","چ","پ","ھ","ش"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
