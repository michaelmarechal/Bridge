Bridge.merge(new System.Globalization.CultureInfo("sv", true), {
    englishName: "Swedish",
    nativeName: "svenska",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-INF",
        positiveInfinitySymbol: "INF",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "kr",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["sön","mån","tis","ons","tor","fre","lör"],
        abbreviatedMonthGenitiveNames: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""],
        abbreviatedMonthNames: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "'den 'd MMMM yyyy HH:mm:ss",
        longDatePattern: "'den 'd MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "'den 'd MMMM",
        monthGenitiveNames: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],
        monthNames: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["sö","må","ti","on","to","fr","lö"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
