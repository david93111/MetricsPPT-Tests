var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "75000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10747",
        "ok": "10747",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "713",
        "ok": "713",
        "ko": "-"
    },
    "percentiles1": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "percentiles2": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "percentiles3": {
        "total": "613",
        "ok": "613",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3411",
        "ok": "3411",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 71828,
        "percentage": 96
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 94,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3078,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "398.936",
        "ok": "398.936",
        "ko": "-"
    }
},
contents: {
"req_postmetric-27b57": {
        type: "REQUEST",
        name: "PostMetric",
path: "PostMetric",
pathFormatted: "req_postmetric-27b57",
stats: {
    "name": "PostMetric",
    "numberOfRequests": {
        "total": "75000",
        "ok": "75000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10747",
        "ok": "10747",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "713",
        "ok": "713",
        "ko": "-"
    },
    "percentiles1": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "percentiles2": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "percentiles3": {
        "total": "613",
        "ok": "613",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3411",
        "ok": "3411",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 71828,
        "percentage": 96
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 94,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3078,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "398.936",
        "ok": "398.936",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
