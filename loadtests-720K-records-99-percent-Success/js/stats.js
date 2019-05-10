var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "720000",
        "ok": "719906",
        "ko": "94"
    },
    "minResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "19308"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "41620",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "117",
        "ok": "109",
        "ko": "59135"
    },
    "standardDeviation": {
        "total": "683",
        "ok": "83",
        "ko": "5870"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "108",
        "ok": "108",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "136",
        "ok": "136",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "248",
        "ok": "247",
        "ko": "60002"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 719360,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 228,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 318,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 94,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "133.111",
        "ok": "133.094",
        "ko": "0.017"
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
        "total": "720000",
        "ok": "719906",
        "ko": "94"
    },
    "minResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "19308"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "41620",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "117",
        "ok": "109",
        "ko": "59135"
    },
    "standardDeviation": {
        "total": "683",
        "ok": "83",
        "ko": "5870"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "108",
        "ok": "108",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "136",
        "ok": "136",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "248",
        "ok": "247",
        "ko": "60002"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 719360,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 228,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 318,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 94,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "133.111",
        "ok": "133.094",
        "ko": "0.017"
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
