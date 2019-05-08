var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "250000",
        "ok": "249999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "375",
        "ok": "376",
        "ko": "375"
    },
    "maxResponseTime": {
        "total": "14430",
        "ok": "14430",
        "ko": "375"
    },
    "meanResponseTime": {
        "total": "443",
        "ok": "443",
        "ko": "375"
    },
    "standardDeviation": {
        "total": "228",
        "ok": "228",
        "ko": "0"
    },
    "percentiles1": {
        "total": "397",
        "ok": "397",
        "ko": "375"
    },
    "percentiles2": {
        "total": "414",
        "ok": "414",
        "ko": "375"
    },
    "percentiles3": {
        "total": "655",
        "ok": "655",
        "ko": "375"
    },
    "percentiles4": {
        "total": "1151",
        "ok": "1151",
        "ko": "375"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 242459,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5231,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2309,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "69.425",
        "ok": "69.425",
        "ko": "0"
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
        "total": "250000",
        "ok": "249999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "375",
        "ok": "376",
        "ko": "375"
    },
    "maxResponseTime": {
        "total": "14430",
        "ok": "14430",
        "ko": "375"
    },
    "meanResponseTime": {
        "total": "443",
        "ok": "443",
        "ko": "375"
    },
    "standardDeviation": {
        "total": "228",
        "ok": "228",
        "ko": "0"
    },
    "percentiles1": {
        "total": "397",
        "ok": "397",
        "ko": "375"
    },
    "percentiles2": {
        "total": "414",
        "ok": "414",
        "ko": "375"
    },
    "percentiles3": {
        "total": "655",
        "ok": "655",
        "ko": "375"
    },
    "percentiles4": {
        "total": "1151",
        "ok": "1151",
        "ko": "375"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 242459,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5231,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2309,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "69.425",
        "ok": "69.425",
        "ko": "0"
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
