Bridge.merge(new System.Globalization.CultureInfo("sq", true), {
    englishName: "Albanian",
    nativeName: "Shqip",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-infinit",
        positiveInfinitySymbol: "+infinit",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "Lek",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
        abbreviatedMonthGenitiveNames: ["Jan","Shk","Mar","Pri","Maj","Qer","Krr","Gsh","Sht","Tet","Nën","Dhj",""],
        abbreviatedMonthNames: ["Jan","Shk","Mar","Pri","Maj","Qer","Krr","Gsh","Sht","Tet","Nën","Dhj",""],
        amDesignator: "PD",
        dateSeparator: ".",
        dayNames: ["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor",""],
        monthNames: ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor",""],
        pmDesignator: "MD",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy",
        shortestDayNames: ["D","H","M","M","E","P","Sh"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
