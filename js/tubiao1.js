/**
 * Created by Administrator on 2017/8/5.
 */
var myChart = echarts.init(document.getElementById('zhentu1'));

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },

    legend: {
        data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
    },

    singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'time',
        axisPointer: {
            animation: true,
            label: {
                show: true
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    },

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: [['2015/11/08',10,'DQ'],['2015/11/09',15,'DQ'],['2015/11/10',35,'DQ'],
                // ['2015/11/11',38,'DQ'],['2015/11/12',22,'DQ'],['2015/11/13',16,'DQ'],
                ['2015/11/14',7,'DQ'],['2015/11/15',2,'DQ'],['2015/11/16',17,'DQ'],
                ['2015/11/17',33,'DQ'],['2015/11/18',40,'DQ'],['2015/11/19',32,'DQ'],
                ['2015/11/20',26,'DQ'],['2015/11/21',35,'DQ'],['2015/11/22',40,'DQ'],
                ['2015/11/23',32,'DQ'],['2015/11/24',26,'DQ'],['2015/11/25',22,'DQ'],
                // ['2015/11/26',16,'DQ'],['2015/11/27',22,'DQ'],['2015/11/28',10,'DQ'],
                ['2015/11/08',35,'TY'],['2015/11/09',36,'TY'],['2015/11/10',37,'TY'],
                ['2015/11/11',22,'TY'],['2015/11/12',24,'TY'],['2015/11/13',26,'TY'],
                ['2015/11/14',34,'TY'],['2015/11/15',21,'TY'],['2015/11/16',18,'TY'],
                ['2015/11/17',45,'TY'],['2015/11/18',32,'TY'],['2015/11/19',35,'TY'],
                ['2015/11/20',30,'TY'],['2015/11/21',28,'TY'],['2015/11/22',27,'TY'],
                ['2015/11/23',26,'TY'],['2015/11/24',15,'TY'],['2015/11/25',30,'TY'],
                ['2015/11/26',35,'TY'],['2015/11/27',42,'TY'],['2015/11/28',42,'TY'],
                ['2015/11/08',21,'SS'],['2015/11/09',25,'SS'],['2015/11/10',27,'SS'],
                ['2015/11/11',23,'SS'],['2015/11/12',24,'SS'],['2015/11/13',21,'SS'],
                ['2015/11/14',35,'SS'],['2015/11/15',39,'SS'],['2015/11/16',40,'SS'],
                ['2015/11/17',36,'SS'],['2015/11/18',33,'SS'],['2015/11/19',43,'SS'],
                ['2015/11/20',40,'SS'],['2015/11/21',34,'SS'],['2015/11/22',28,'SS'],
                // ['2015/11/23',26,'SS'],['2015/11/24',37,'SS'],['2015/11/25',41,'SS'],
                // ['2015/11/26',46,'SS'],['2015/11/27',47,'SS'],['2015/11/28',41,'SS'],
                // ['2015/11/08',10,'QG'],['2015/11/09',15,'QG'],['2015/11/10',35,'QG'],
                // ['2015/11/11',38,'QG'],['2015/11/12',22,'QG'],['2015/11/13',16,'QG'],
                ['2015/11/14',7,'QG'],['2015/11/15',2,'QG'],['2015/11/16',17,'QG'],
                ['2015/11/17',33,'QG'],['2015/11/18',40,'QG'],['2015/11/19',32,'QG'],
                ['2015/11/20',26,'QG'],['2015/11/21',35,'QG'],['2015/11/22',40,'QG'],
                ['2015/11/23',32,'QG'],['2015/11/24',26,'QG'],['2015/11/25',22,'QG'],
                ['2015/11/26',16,'QG'],['2015/11/27',22,'QG'],['2015/11/28',10,'QG'],
                ['2015/11/08',10,'SY'],['2015/11/09',15,'SY'],['2015/11/10',35,'SY'],
                ['2015/11/11',38,'SY'],['2015/11/12',22,'SY'],['2015/11/13',16,'SY'],
                ['2015/11/14',7,'SY'],['2015/11/15',2,'SY'],['2015/11/16',17,'SY'],
                ['2015/11/17',33,'SY'],['2015/11/18',40,'SY'],['2015/11/19',32,'SY'],
                ['2015/11/20',26,'SY'],['2015/11/21',35,'SY'],['2015/11/22',4,'SY'],
                ['2015/11/23',32,'SY'],['2015/11/24',26,'SY'],['2015/11/25',22,'SY'],
                ['2015/11/26',16,'SY'],['2015/11/27',22,'SY'],['2015/11/28',10,'SY'],
                ['2015/11/08',10,'DD'],['2015/11/09',15,'DD'],['2015/11/10',35,'DD'],
                ['2015/11/11',38,'DD'],['2015/11/12',22,'DD'],['2015/11/13',16,'DD'],
                ['2015/11/14',7,'DD'],['2015/11/15',2,'DD'],['2015/11/16',17,'DD'],
                ['2015/11/17',33,'DD'],['2015/11/18',4,'DD'],['2015/11/19',32,'DD'],
                ['2015/11/20',26,'DD'],['2015/11/21',35,'DD'],['2015/11/22',40,'DD'],
                ['2015/11/23',32,'DD'],['2015/11/24',26,'DD'],['2015/11/25',22,'DD'],
                ['2015/11/26',16,'DD'],['2015/11/27',22,'DD'],['2015/11/28',10,'DD']]
        }
    ]
};
myChart.setOption(option);
/***********************图二****************************/
var myChart2 = echarts.init(document.getElementById('zhentu2'));


// From https://github.com/jsundram/streamgraph.js/blob/master/examples/data/lastfm.js
var rawData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 49, 67, 16, 0, 19, 19, 0, 0, 1, 10, 5, 6, 1, 1, 0, 25, 0, 0, 0],
    [0, 6, 3, 34, 0, 16, 1, 0, 0, 1, 6, 0, 1, 56, 0, 2, 0, 2, 0, 0],
    [0, 8, 13, 15, 0, 12, 23, 0, 0, 1, 0, 1, 0, 0, 6, 0, 0, 1, 0, 1],
    [0, 9, 28, 0, 91, 6, 1, 0, 0, 0, 7, 18, 0, 9, 16, 0, 1, 0, 0, 0],
    [0, 3, 42, 36, 21, 0, 1, 0, 0, 0, 0, 16, 30, 1, 4, 62, 55, 1, 0, 0],
    [0, 7, 13, 12, 64, 5, 0, 0, 0, 8, 17, 3, 72, 1, 1, 53, 1, 0, 0, 0],
    [1, 14, 13, 7, 8, 8, 7, 0, 1, 1, 14, 6, 44, 8, 7, 17, 21, 1, 0, 0],
    [0, 6, 14, 2, 14, 1, 0, 0, 0, 0, 2, 2, 7, 15, 6, 3, 0, 0, 0, 0],
    [0, 9, 11, 3, 0, 8, 0, 0, 14, 2, 0, 1, 1, 1, 7, 13, 2, 1, 0, 0],
    [0, 7, 5, 10, 8, 21, 0, 0, 130, 1, 2, 18, 6, 1, 5, 1, 4, 1, 0, 7],
    [0, 2, 15, 1, 5, 5, 0, 0, 6, 0, 0, 0, 4, 1, 3, 1, 17, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 27, 26, 1, 0, 11, 1, 0, 0, 0, 1, 1, 2, 0, 0, 9, 1, 0, 0, 0],
    [31, 81, 11, 6, 11, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 3, 14, 0, 0, 12],
    [19, 53, 6, 20, 0, 4, 37, 0, 30, 86, 43, 7, 5, 7, 17, 19, 2, 0, 0, 5],
    [0, 22, 14, 6, 10, 24, 18, 0, 13, 21, 5, 2, 13, 35, 7, 1, 8, 0, 0, 1],
    [0, 56, 5, 0, 0, 0, 0, 0, 7, 24, 0, 17, 7, 0, 0, 3, 0, 0, 0, 8],
    [18, 29, 3, 6, 11, 0, 15, 0, 12, 42, 37, 0, 3, 3, 13, 8, 0, 0, 0, 1],
    [32, 39, 37, 3, 33, 21, 6, 0, 4, 17, 0, 11, 8, 2, 3, 0, 23, 0, 0, 17],
    [72, 15, 28, 0, 0, 0, 0, 0, 1, 3, 0, 35, 0, 9, 17, 1, 9, 1, 0, 8],
    [11, 15, 4, 2, 0, 18, 10, 0, 20, 3, 0, 0, 2, 0, 0, 2, 2, 30, 0, 0],
    [14, 29, 19, 3, 2, 17, 13, 0, 7, 12, 2, 0, 6, 0, 0, 1, 1, 34, 0, 1],
    [1, 1, 7, 6, 1, 1, 15, 1, 1, 2, 1, 3, 1, 1, 9, 1, 1, 25, 1, 72]
];

var labels = [
    'The Sea and Cake',
    'Andrew Bird',
    'Laura Veirs',
    'Brian Eno',
    'Christopher Willits',
    'Wilco',
    'Edgar Meyer',
    'B\xc3\xa9la Fleck',
    'Fleet Foxes',
    'Kings of Convenience',
    'Brett Dennen',
    'Psapp',
    'The Bad Plus',
    'Feist',
    'Battles',
    'Avishai Cohen',
    'Rachael Yamagata',
    'Norah Jones',
    'B\xc3\xa9la Fleck and the Flecktones',
    'Joshua Redman'
];

var data = [];
for (var i = 0; i < rawData.length; i++) {
    for (var j = 0; j < rawData[i].length; j++) {
        var label = labels[i];
        data.push([
            j, rawData[i][j], label
        ]);
    }
}

option2 = {
    singleAxis: {
        max: 'dataMax'
    },
    series: [{
        type: 'themeRiver',
        data: data,
        label: {
            normal: {
                show: false
            }
        }
    }]
};
myChart2.setOption(option2);
window.onresize = function(){//浏览器被重置大小时改变大小
    myChart.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
}

/***********************图三****************************/
var myChart3 = echarts.init(document.getElementById('zhentu3'));
//app.title = '环形图';

option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
myChart3.setOption(option3);
/***********************图4****************************/
var myChart4 = echarts.init(document.getElementById('zhentu4'));
//app.title = '嵌套环形图';

option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
myChart4.setOption(option4);
/***********************图5***************************/
var myChart5 = echarts.init(document.getElementById('zhentu5'));
option5 = {
    title: {
        text: 'look'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '销售（sales）', max: 6500},
            { name: '管理（Administration）', max: 16000},
            { name: '信息技术（Information Techology）', max: 30000},
            { name: '客服（Customer Support）', max: 38000},
            { name: '研发（Development）', max: 52000},
            { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
            {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
};
myChart5.setOption(option5);
/***********************图6**************************/
var myChart6 = echarts.init(document.getElementById('zhentu6'));
option6 = {
    title: {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        x:'right',
        y:'bottom'
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        data: (function (){
            var list = [];
            for (var i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
            }
            return list;
        })()
    },
    visualMap: {
        color: ['red', 'yellow']
    },
    radar: {
        indicator : [
            { text: 'IE8-', max: 400},
            { text: 'IE9+', max: 400},
            { text: 'Safari', max: 400},
            { text: 'Firefox', max: 400},
            { text: 'Chrome', max: 400}
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width:1
                        }
                    },
                    emphasis : {
                        areaStyle: {color:'rgba(0,250,0,0.3)'}
                    }
                },
                data:[
                    {
                        value:[
                            (40 - i) * 10,
                            (38 - i) * 4 + 60,
                            i * 5 + 10,
                            i * 9,
                            i * i /2
                        ],
                        name: i + 2000 + ''
                    }
                ]
            });
        }
        return series;
    })()
};
myChart6.setOption(option6);