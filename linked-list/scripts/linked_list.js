var index = 0;
var f_list2_Index = 0;
var displayMenu = function() {
    
}

$('.create-btn').on('click', function(){
    $('.return,.output').text('');
    if(/[^0-9]/.test($('.create-text').val()) === true) {
        $('.return,.output').text('Digits only!');
    }
    else if(/([0-9]{2,})$/.test($('.create-text').val()) === true) {
        $('.return,.output').css({'font-size':'3em', 'line-height':'30px'}).text('Too many digits! 0-9 only!');
    }
    else if ($('.create-text').val() !== '') {
        if (index === 0) {
            $('.f_list').remove();
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $f_list = $('<ul />', { 
                class: 'f_list',
                //class attribute
                'forward_list-size': $val,       
            })
            //after element with class '.forward_list-info'
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $val; i++) {
                if(i === 0) {
                    var $f_listHead = $('<li />', { 
                        class: 'f_listHead-item',
                        'f_list-index': 'head',
                    })
                    .text('HEAD');
                    $f_listHead.appendTo($f_list);
                }
                var $randVal = 1 + Math.floor(Math.random() * 9);
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item' + ' ' + index,
                    'f_list-index': index,
                })
                $f_listItem.appendTo($f_list);
                var $f_listData = $('<div />', {
                    class: 'f_list-item-data',
                })
                .text($randVal);
                $f_listData.appendTo($f_listItem);
                
                var $f_listPointer = $('<div />', {
                    class: 'f_list-item-pointer',
                })
                .text('*next');
                $f_listData.after($f_listPointer);
                index++;
                if(i === 0) {
                    var $f_listArrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $f_listLine = $('<div />', {
                        class: 'line',
                    });
                    var $f_listPoint = $('<div />', {
                        class: 'point',
                    });
                    $f_listArrow.append($f_listLine);
                    $f_listArrow.append($f_listPoint);
                    $f_listHead.after($f_listArrow);
                }
                var $f_listArrow = $('<div />', {
                    class: 'arrow',
                });
                var $f_listLine = $('<div />', {
                    class: 'line',
                });
                var $f_listPoint = $('<div />', {
                    class: 'point',
                });
                $f_listArrow.append($f_listLine);
                $f_listArrow.append($f_listPoint);
                $f_listItem.after($f_listArrow);
            }
            $('.forward_list-info').addClass('active');
            $('.forward_list-size-p').text(' ' + index);
        }
        //If user wants to create another linked-list without refreshing page
        else {
            $('.f_list').remove();
            index = 0;
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $f_list = $('<li />', { 
                class: 'f_list',
                'forward_list-size': $val
            })
            $('.forward_list-info').after($f_list);
            for (var i = 0; i < $val; i++) {
                if(i === 0) {
                    var $f_listHead = $('<li />', { 
                        class: 'f_listHead-item',
                        'f_list-index': 'head',
                    })
                    .text('HEAD');
                    $f_listHead.appendTo($f_list);
                }
                var $randVal = 1 + Math.floor(Math.random() * 9);
                var $f_listItem = $('<li />', { 
                    class: 'f_list-item' + ' ' + index,
                    'f_list-index': index,
                })
                $f_listItem.appendTo($f_list);
                var $f_listData = $('<div />', {
                    class: 'f_list-item-data',
                })
                .text($randVal);
                $f_listData.appendTo($f_listItem);
                var $f_listPointer = $('<div />', {
                    class: 'f_list-item-pointer',
                })
                .text('*next');
                $f_listData.after($f_listPointer);
                index++;
                if(i === 0) {
                    var $f_listArrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $f_listLine = $('<div />', {
                        class: 'line',
                    });
                    var $f_listPoint = $('<div />', {
                        class: 'point',
                    });
                    $f_listArrow.append($f_listLine);
                    $f_listArrow.append($f_listPoint);
                    $f_listHead.after($f_listArrow);
                }
                var $f_listArrow = $('<div />', {
                    class: 'arrow',
                });
                var $f_listLine = $('<div />', {
                    class: 'line',
                });
                var $f_listPoint = $('<div />', {
                    class: 'point',
                });
                $f_listArrow.append($f_listLine);
                $f_listArrow.append($f_listPoint);
                $f_listItem.after($f_listArrow);
            }
            $('.forward_list-size-p').text(' ' + index);
        }
        var $f_listNullItem = $('<li />', { 
            class: 'f_listNull-item',
            'f_list-index': 'null',
        })
        .text('NULL');
        $('.f_list .arrow:last').after($f_listNullItem);
    }
    else {
        $('.return,.output').text('No param!');
    }
});

$('.front-btn').on('click', function(){
    if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return').text($('.f_list li:nth-of-type(2) .f_list-item-data').html());
    }
    else if($('.forward_list-info').hasClass('active') === true && index === 0){
        $('.return,.output').text('Empty!');
    }
    else {
        $('.return,.output').text('No list!');
    }
});

$('.assign-btn').on('click', function() {
    /*Fill*/
    if($('.assign-div .fill').css('display') === 'inline') {
        $('.return,.output').text('');
        if(/[^0-9]/.test($('.assign-size').val()) === true || /[^0-9]/.test($('.assign-val').val()) === true) {
            $('.return,.output').text('Digits only!');
        }
        else if($('.assign-size').val(),$('.assign-val').val() !== '') {
            if(/([0-9]{2,})$/.test($('.assign-size').val()) === true && /([0-9]{2,})$/.test($('.assign-val').val()) === true) {
                $('.return,.output').css('font-size','2em').text('Size and val too large!');
            }
            else if(/([0-9]{2,})$/.test($('.assign-size').val()) === true && /([0-9]{2,})$/.test($('.assign-val').val()) === false) {
                $('.return,.output').css({'font-size':'3.2em', 'line-height':'30px'}).text('Size too large! 0-9 only!');
            }
            else if(/([0-9]{2,})$/.test($('.assign-size').val()) === false && /([0-9]{2,})$/.test($('.assign-val').val()) === true) {
                $('.return,.output').css({'font-size':'3.2em', 'line-height':'30px'}).text('Val too large! 0-9 only!');
            }
            else if(index !== 0) {
                $('.f_list').remove();
                index = 0;
                var $size = $('.assign-size').val();
                var $val = $('.assign-val').val();
                $('.assign-size,.assign-val').val('');
                var $f_list = $('<ul />', { 
                    class: 'f_list',
                    //class attribute
                    'forward_list-size': $size,       
                })
                $('.forward_list-info').after($f_list);
                for (var i = 0; i < $size; i++) {
                    if(i === 0) {
                        var $f_listHead = $('<li />', { 
                            class: 'f_listHead-item',
                            'f_list-index': 'head',
                        })
                        .text('HEAD');
                        $f_listHead.appendTo($f_list);
                    }
                    var $f_listItem = $('<li />', { 
                        class: 'f_list-item' + ' ' + index,
                        'f_list-index': index,
                    })
                    $f_listItem.appendTo($f_list);
                    var $f_listData = $('<div />', {
                        class: 'f_list-item-data',
                    })
                    .text($val);
                    $f_listData.appendTo($f_listItem);

                    var $f_listPointer = $('<div />', {
                        class: 'f_list-item-pointer',
                    })
                    .text('*next');
                    $f_listData.after($f_listPointer);
                    index++;
                    if(i === 0) {
                        var $f_listArrow = $('<div />', {
                            class: 'arrow',
                        });
                        var $f_listLine = $('<div />', {
                            class: 'line',
                        });
                        var $f_listPoint = $('<div />', {
                            class: 'point',
                        });
                        $f_listArrow.append($f_listLine);
                        $f_listArrow.append($f_listPoint);
                        $f_listHead.after($f_listArrow);
                    }
                    var $f_listArrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $f_listLine = $('<div />', {
                        class: 'line',
                    });
                    var $f_listPoint = $('<div />', {
                        class: 'point',
                    });
                    $f_listArrow.append($f_listLine);
                    $f_listArrow.append($f_listPoint);
                    $f_listItem.after($f_listArrow);
                }
            $('.forward_list-size-p').text(' ' + index);
            }
            else {
                $('.f_list').remove();
                var $size = $('.assign-size').val();
                var $val = $('.assign-val').val();
                $('.assign-size').val('');
                $('.assign-val').val('');
                var $f_list = $('<ul />', { 
                    class: 'f_list',
                    //class attribute
                    'forward_list-size': $size,       
                })
                $('.forward_list-info').after($f_list);
                for (var i = 0; i < $size; i++) {
                    if(i === 0) {
                        var $f_listHead = $('<li />', { 
                            class: 'f_listHead-item',
                            'f_list-index': 'head',
                        })
                        .text('HEAD');
                        $f_listHead.appendTo($f_list);
                    }
                    var $f_listItem = $('<li />', { 
                        class: 'f_list-item' + ' ' + index,
                        'f_list-index': index,
                    })
                    $f_listItem.appendTo($f_list);
                    var $f_listData = $('<div />', {
                        class: 'f_list-item-data',
                    })
                    .text($val);
                    $f_listData.appendTo($f_listItem);

                    var $f_listPointer = $('<div />', {
                        class: 'f_list-item-pointer',
                    })
                    .text('*next');
                    $f_listData.after($f_listPointer);
                    index++;
                    if(i === 0) {
                        var $f_listArrow = $('<div />', {
                            class: 'arrow',
                        });
                        var $f_listLine = $('<div />', {
                            class: 'line',
                        });
                        var $f_listPoint = $('<div />', {
                            class: 'point',
                        });
                        $f_listArrow.append($f_listLine);
                        $f_listArrow.append($f_listPoint);
                        $f_listHead.after($f_listArrow);
                    }
                    var $f_listArrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $f_listLine = $('<div />', {
                        class: 'line',
                    });
                    var $f_listPoint = $('<div />', {
                        class: 'point',
                    });
                    $f_listArrow.append($f_listLine);
                    $f_listArrow.append($f_listPoint);
                    $f_listItem.after($f_listArrow);
                }
                $('.forward_list-info').addClass('active');
                $('.forward_list-size-p').text(' ' + index);
            }
            var $f_listNullItem = $('<li />', { 
                class: 'f_listNull-item',
                'f_list-index': 'null',
            })
            .text('NULL');
            $('.f_list .arrow:last').after($f_listNullItem);
        }
        else if($('.assign-size').val() === '' && $('.assign-val').val() !== '') {
            $('.return,.output').text('Need size!');
        }
        else if($('.assign-size').val() !== '' && $('.assign-val').val() === ''){
            $('.return,.output').text('Need val!');
        }
        else {
            $('.return,.output').text('No param!');
        }
    }
    /*Range*/
    else if($('.assign-div .range').css('display') === 'inline') {
        $('.return,.output').text('');
        if($('.forward_list-info').hasClass('active') === false) {
            $('.return,.output').text('No list!');
        }
        else if($('.forward_list-info').hasClass('active') === true && index === 0) {
            $('.return,.output').text('Empty list!');
        }
        else {
            if($('.assign-position-first').val(),$('.assign-position-last').val() !== 'Choose') {
                $('.return,.output').text('');
                /*Different scenarios*/
                if($('.assign-position-first').val() === $('.assign-position-last').val()) {
                    $('.return,.output').text('Invalid Range!');
                }
                else if(($('.assign-position-first').val() === 'f_list.before_begin()' 
                        || $('.assign-position-first').val() === 'f_list.end()')
                       && 
                       ($('.assign-position-last').val() === 'f_list.before_begin()' 
                        || $('.assign-position-last').val() === 'f_list.begin()')) {
                    
                    $('.return,.output').text('Invalid Params!');
                }
                else if(($('.assign-position-first').val() === 'f_list.before_begin()' 
                        || $('.assign-position-first').val() === 'f_list.end()')
                        && $('.assign-position-last').val() !== 'f_list.before_begin()'
                        && $('.assign-position-last').val() !== 'f_list.begin()') {
                    
                    $('.return,.output').css('font-size','2.5em').text('Invalid First Param!');
                }
                else if(($('.assign-position-last').val() === 'f_list.before_begin()' 
                        || $('.assign-position-last').val() === 'f_list.begin()')
                        && $('.assign-position-first').val() !== 'f_list.before_begin()'
                        && $('.assign-position-first').val() !== 'f_list.end()') {
                    
                    $('.return,.output').css('font-size','2.5em').text('Invalid Last Param!');
                }
                else if($('.assign-position-first').val() === 'f_list.begin()' 
                        && $('.assign-position-last').val() === 'std::forward_list<int>iterator mid') {
                   
                    if(index === 1) {
                        $('.return,.output').css('font-size','2.5em').text('Mid out of range!');
                    }
                    else {
                        if(f_list2_Index === 0) {
                            var midIndex = Math.floor(index/2)+2;
                            var $array = [];
                            for(var i = 2; i < midIndex; ++i) {
                                $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
                            }
                            var $f_list2 = $('<ul />', { 
                                class: 'f_list2',
                                //class attribute
                                'forward_list2-size': $size,       
                            })
                            $('.forward_list2-info').after($f_list2);
                            for (var i = 0; i < $array.length; i++) {
                                if(i === 0) {
                                    var $f_list2Head = $('<li />', { 
                                        class: 'f_listHead-item',
                                        'f_list2-index': 'head',
                                    })
                                    .text('HEAD');
                                    $f_list2Head.appendTo('ul.f_list2');
                                }
                                var $f_list2Item = $('<li />', { 
                                    class: 'f_list-item' + ' ' + i,
                                    'f_list2-index': i,
                                })
                                $f_list2Item.appendTo('.f_list2');
                                var $f_list2Data = $('<div />', {
                                    class: 'f_list-item-data',
                                })
                                .text($array[i]);
                                $f_list2Data.appendTo($f_list2Item);
                                var $f_list2Pointer = $('<div />', {
                                    class: 'f_list-item-pointer',
                                })
                                .text('*next');
                                $f_list2Data.after($f_list2Pointer);
                                f_list2_Index++;
                                if(i === 0) {
                                    var $f_list2Arrow = $('<div />', {
                                        class: 'arrow',
                                    });
                                    var $f_list2Line = $('<div />', {
                                        class: 'line',
                                    });
                                    var $f_list2Point = $('<div />', {
                                        class: 'point',
                                    });
                                    $f_list2Arrow.append($f_list2Line);
                                    $f_list2Arrow.append($f_list2Point);
                                    $f_list2Head.after($f_list2Arrow);
                                }
                                var $f_list2Arrow = $('<div />', {
                                    class: 'arrow',
                                });
                                var $f_list2Line = $('<div />', {
                                    class: 'line',
                                });
                                var $f_list2Point = $('<div />', {
                                    class: 'point',
                                });
                                $f_list2Arrow.append($f_list2Line);
                                $f_list2Arrow.append($f_list2Point);
                                $f_list2Item.after($f_list2Arrow);  
                            }
                        }
                        else {
                            $('.f_list2').remove();
                            f_list2_Index = 0;
                            var midIndex = Math.floor(index/2)+2;
                            var $array = [];
                            for(var i = 2; i < midIndex; ++i) {
                                $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
                            }
                            var $f_list2 = $('<ul />', { 
                                class: 'f_list2',
                                //class attribute
                                'forward_list2-size': $size,       
                            })
                            $('.forward_list2-info').after($f_list2);
                            for (var i = 0; i < $array.length; i++) {
                                if(i === 0) {
                                    var $f_list2Head = $('<li />', { 
                                        class: 'f_listHead-item',
                                        'f_list2-index': 'head',
                                    })
                                    .text('HEAD');
                                    $f_list2Head.appendTo('ul.f_list2');
                                }
                                var $f_list2Item = $('<li />', { 
                                    class: 'f_list-item' + ' ' + i,
                                    'f_list2-index': i,
                                })
                                $f_list2Item.appendTo('.f_list2');
                                var $f_list2Data = $('<div />', {
                                    class: 'f_list-item-data',
                                })
                                .text($array[i]);
                                $f_list2Data.appendTo($f_list2Item);
                                var $f_list2Pointer = $('<div />', {
                                    class: 'f_list-item-pointer',
                                })
                                .text('*next');
                                $f_list2Data.after($f_list2Pointer);
                                f_list2_Index++;
                                if(i === 0) {
                                    var $f_list2Arrow = $('<div />', {
                                        class: 'arrow',
                                    });
                                    var $f_list2Line = $('<div />', {
                                        class: 'line',
                                    });
                                    var $f_list2Point = $('<div />', {
                                        class: 'point',
                                    });
                                    $f_list2Arrow.append($f_list2Line);
                                    $f_list2Arrow.append($f_list2Point);
                                    $f_list2Head.after($f_list2Arrow);
                                }
                                var $f_list2Arrow = $('<div />', {
                                    class: 'arrow',
                                });
                                var $f_list2Line = $('<div />', {
                                    class: 'line',
                                });
                                var $f_list2Point = $('<div />', {
                                    class: 'point',
                                });
                                $f_list2Arrow.append($f_list2Line);
                                $f_list2Arrow.append($f_list2Point);
                                $f_list2Item.after($f_list2Arrow);  
                            }
                        }
                        var $f_list2NullItem = $('<li />', { 
                            class: 'f_listNull-item',
                            'f_list2-index': 'null',
                        })
                        .text('NULL');
                        $('.f_list2 .arrow:last').after($f_list2NullItem);

                        $('.forward_list2-info').addClass('active');
                        $('.forward_list2-size-p').text(' ' + f_list2_Size);
                    }
                }
                else if($('.assign-position-first').val() === 'f_list.begin()' 
                        && $('.assign-position-last').val() === 'f_list.end()') {
                    
                    if(index === 1) {
                        $('.return,.output').css('font-size','2.5em').text('End out of range!');
                    }
                    else {
                        if(f_list2_Index === 0) {
                            var f_list2_End = f_list2_Index + 2;
                            var $array = [];
                            for(var i = 2; i < f_list2_End; ++i) {
                                $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
                            }
                            var $f_list2 = $('<ul />', { 
                                class: 'f_list2',
                                //class attribute
                                'forward_list2-size': $size,       
                            })
                            $('.forward_list2-info').after($f_list2);
                            for (var i = 0; i < $array.length; i++) {
                                if(i === 0) {
                                    var $f_list2Head = $('<li />', { 
                                        class: 'f_listHead-item',
                                        'f_list2-index': 'head',
                                    })
                                    .text('HEAD');
                                    $f_list2Head.appendTo('ul.f_list2');
                                }
                                var $f_list2Item = $('<li />', { 
                                    class: 'f_list-item' + ' ' + i,
                                    'f_list2-index': i,
                                })
                                $f_list2Item.appendTo('.f_list2');
                                var $f_list2Data = $('<div />', {
                                    class: 'f_list-item-data',
                                })
                                .text($array[i]);
                                $f_list2Data.appendTo($f_list2Item);
                                var $f_list2Pointer = $('<div />', {
                                    class: 'f_list-item-pointer',
                                })
                                .text('*next');
                                $f_list2Data.after($f_list2Pointer);
                                f_list2_Index++;
                                if(i === 0) {
                                    var $f_list2Arrow = $('<div />', {
                                        class: 'arrow',
                                    });
                                    var $f_list2Line = $('<div />', {
                                        class: 'line',
                                    });
                                    var $f_list2Point = $('<div />', {
                                        class: 'point',
                                    });
                                    $f_list2Arrow.append($f_list2Line);
                                    $f_list2Arrow.append($f_list2Point);
                                    $f_list2Head.after($f_list2Arrow);
                                }
                                var $f_list2Arrow = $('<div />', {
                                    class: 'arrow',
                                });
                                var $f_list2Line = $('<div />', {
                                    class: 'line',
                                });
                                var $f_list2Point = $('<div />', {
                                    class: 'point',
                                });
                                $f_list2Arrow.append($f_list2Line);
                                $f_list2Arrow.append($f_list2Point);
                                $f_list2Item.after($f_list2Arrow);  
                            }
                        }
                        else {
                            $('.f_list2').remove();
                            f_list2_Index = 0;
                            var f_list2_End = f_list2_Index + 2;
                            var $array = [];
                            for(var i = 2; i < f_list2_End; ++i) {
                                $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
                            }
                            var $f_list2 = $('<ul />', { 
                                class: 'f_list2',
                                //class attribute
                                'forward_list2-size': $size,       
                            })
                            $('.forward_list2-info').after($f_list2);
                            for (var i = 0; i < $array.length; i++) {
                                if(i === 0) {
                                    var $f_list2Head = $('<li />', { 
                                        class: 'f_listHead-item',
                                        'f_list2-index': 'head',
                                    })
                                    .text('HEAD');
                                    $f_list2Head.appendTo('ul.f_list2');
                                }
                                var $f_list2Item = $('<li />', { 
                                    class: 'f_list-item' + ' ' + i,
                                    'f_list2-index': i,
                                })
                                $f_list2Item.appendTo('.f_list2');
                                var $f_list2Data = $('<div />', {
                                    class: 'f_list-item-data',
                                })
                                .text($array[i]);
                                $f_list2Data.appendTo($f_list2Item);
                                var $f_list2Pointer = $('<div />', {
                                    class: 'f_list-item-pointer',
                                })
                                .text('*next');
                                $f_list2Data.after($f_list2Pointer);
                                f_list2_Index++;
                                if(i === 0) {
                                    var $f_list2Arrow = $('<div />', {
                                        class: 'arrow',
                                    });
                                    var $f_list2Line = $('<div />', {
                                        class: 'line',
                                    });
                                    var $f_list2Point = $('<div />', {
                                        class: 'point',
                                    });
                                    $f_list2Arrow.append($f_list2Line);
                                    $f_list2Arrow.append($f_list2Point);
                                    $f_list2Head.after($f_list2Arrow);
                                }
                                var $f_list2Arrow = $('<div />', {
                                    class: 'arrow',
                                });
                                var $f_list2Line = $('<div />', {
                                    class: 'line',
                                });
                                var $f_list2Point = $('<div />', {
                                    class: 'point',
                                });
                                $f_list2Arrow.append($f_list2Line);
                                $f_list2Arrow.append($f_list2Point);
                                $f_list2Item.after($f_list2Arrow);  
                            }
                        }
                        var $f_list2NullItem = $('<li />', { 
                            class: 'f_listNull-item',
                            'f_list2-index': 'null',
                        })
                        .text('NULL');
                        $('.f_list2 .arrow:last').after($f_list2NullItem);

                        $('.forward_list2-info').addClass('active');
                        $('.forward_list2-size-p').text(' ' + f_list2_Index);
                    }
                }
                else if($('.assign-position-first').val() === 'std::forward_list<int>iterator mid' 
                        && $('.assign-position-last').val() === 'f_list.end()') {
                    
                    if(index <= 2) {
                        $('.return,.output').css('font-size','2em').text('Mid and End out of range!');
                    }
                    else {
                        if(f_list2_Index === 0) {
                            var f_list2_End = index + 2;
                            var f_list2_Mid = Math.floor(index/2)+2;
                            var $array = [];
                            for(var i = f_list2_Mid; i < f_list2_End; ++i) {
                                $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
                            }
                            var $f_list2 = $('<ul />', { 
                                class: 'f_list2',
                                //class attribute
                                'forward_list2-size': $size,       
                            })
                            $('.forward_list2-info').after($f_list2);
                            for (var i = 0; i < $array.length; i++) {
                                if(i === 0) {
                                    var $f_list2Head = $('<li />', { 
                                        class: 'f_listHead-item',
                                        'f_list2-index': 'head',
                                    })
                                    .text('HEAD');
                                    $f_list2Head.appendTo('ul.f_list2');
                                }
                                var $f_list2Item = $('<li />', { 
                                    class: 'f_list-item' + ' ' + i,
                                    'f_list2-index': i,
                                })
                                $f_list2Item.appendTo('.f_list2');
                                var $f_list2Data = $('<div />', {
                                    class: 'f_list-item-data',
                                })
                                .text($array[i]);
                                
                                $f_list2Data.appendTo($f_list2Item);
                                var $f_list2Pointer = $('<div />', {
                                    class: 'f_list-item-pointer',
                                })
                                .text('*next');
                                $f_list2Data.after($f_list2Pointer);
                                f_list2_Index++;
                                if(i === 0) {
                                    var $f_list2Arrow = $('<div />', {
                                        class: 'arrow',
                                    });
                                    var $f_list2Line = $('<div />', {
                                        class: 'line',
                                    });
                                    var $f_list2Point = $('<div />', {
                                        class: 'point',
                                    });
                                    $f_list2Arrow.append($f_list2Line);
                                    $f_list2Arrow.append($f_list2Point);
                                    $f_list2Head.after($f_list2Arrow);
                                }
                                var $f_list2Arrow = $('<div />', {
                                    class: 'arrow',
                                });
                                var $f_list2Line = $('<div />', {
                                    class: 'line',
                                });
                                var $f_list2Point = $('<div />', {
                                    class: 'point',
                                });
                                $f_list2Arrow.append($f_list2Line);
                                $f_list2Arrow.append($f_list2Point);
                                $f_list2Item.after($f_list2Arrow);  
                            }
                        }
                        else {
                            $('.f_list2').remove();
                            f_list2_Index = 0;
                            var f_list2_End = index + 2;
                            var f_list2_Mid = Math.floor(index/2)+2;
                            var $array = [];
                            for(var i = f_list2_Mid; i < f_list2_End; ++i) {
                                $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
                            }
                            var $f_list2 = $('<ul />', { 
                                class: 'f_list2',
                                //class attribute
                                'forward_list2-size': $size,       
                            })
                            $('.forward_list2-info').after($f_list2);
                            for (var i = 0; i < $array.length; i++) {
                                if(i === 0) {
                                    var $f_list2Head = $('<li />', { 
                                        class: 'f_listHead-item',
                                        'f_list2-index': 'head',
                                    })
                                    .text('HEAD');
                                    $f_list2Head.appendTo('ul.f_list2');
                                }
                                var $f_list2Item = $('<li />', { 
                                    class: 'f_list-item' + ' ' + i,
                                    'f_list2-index': i,
                                })
                                $f_list2Item.appendTo('.f_list2');
                                var $f_list2Data = $('<div />', {
                                    class: 'f_list-item-data',
                                })
                                .text($array[i]);
                                $f_list2Data.appendTo($f_list2Item);
                                var $f_list2Pointer = $('<div />', {
                                    class: 'f_list-item-pointer',
                                })
                                .text('*next');
                                $f_list2Data.after($f_list2Pointer);
                                f_list2_Index++;
                                if(i === 0) {
                                    var $f_list2Arrow = $('<div />', {
                                        class: 'arrow',
                                    });
                                    var $f_list2Line = $('<div />', {
                                        class: 'line',
                                    });
                                    var $f_list2Point = $('<div />', {
                                        class: 'point',
                                    });
                                    $f_list2Arrow.append($f_list2Line);
                                    $f_list2Arrow.append($f_list2Point);
                                    $f_list2Head.after($f_list2Arrow);
                                }
                                var $f_list2Arrow = $('<div />', {
                                    class: 'arrow',
                                });
                                var $f_list2Line = $('<div />', {
                                    class: 'line',
                                });
                                var $f_list2Point = $('<div />', {
                                    class: 'point',
                                });
                                $f_list2Arrow.append($f_list2Line);
                                $f_list2Arrow.append($f_list2Point);
                                $f_list2Item.after($f_list2Arrow);  
                            }
                        }
                        var $f_list2NullItem = $('<li />', { 
                            class: 'f_listNull-item',
                            'f_list2-index': 'null',
                        })
                        .text('NULL');
                        $('.f_list2 .arrow:last').after($f_list2NullItem);
 
                        $('.forward_list2-info').addClass('active');
                        $('.forward_list2-size-p').text(' ' + f_list2_Index);
                    }
                }
            }
            else if($('.assign-position-first').val() !== 'Choose' && $('.assign-position-last').val() === 'Choose') {
                $('.return,.output').text('No last pos!');
            }
            else if($('.assign-position-first').val() === 'Choose' && $('.assign-position-last').val() !== 'Choose') {
                $('.return,.output').text('No first pos!');
            }
            else {
                $('.return,.output').text('No param!'); 
            } 
        }
    }
    /*Initializer-list*/
    else if($('.assign-div .initializer-list').css('display') === 'inline') {
        if($('.assign-initializer-list').val() === '') {
            $('.return,.output').text('No param!'); 
        }
        else {
            $('.return,.output').text(''); 
        
            var reg1 = new RegExp('[,]{2,}');   //,, - Two or more commas
            var reg2 = new RegExp('[^a-zA-Z]'); //No alphabetical letters
            var reg3 = new RegExp('([0-9]+(,[0-9]+)*)$');    //#,# - Format for initializer-list
      
            if(reg1.test($('.assign-initializer-list').val()) === false 
               && reg2.test($('.assign-initializer-list').val()) === true
               && reg3.test($('.assign-initializer-list').val()) === true){
                
                var $list = $('.assign-initializer-list').val().split(','); //$list is an array
                if(index === 0) {
                    $('.f_list').remove();
                    $('.assign-initializer-list').val('');
                    var $f_list = $('<ul />', { 
                        class: 'f_list',
                        //class attribute
                        'forward_list-size': $val,       
                    })
                    //after element with class '.forward_list-info'
                    $('.forward_list-info').after($f_list);
                    for (var i = 0; i < $list.length; i++) {
                        if(i === 0) {
                            var $f_listHead = $('<li />', { 
                                class: 'f_listHead-item',
                                'f_list-index': 'head',
                            })
                            .text('HEAD');
                            $f_listHead.appendTo($f_list);
                        }
                        var $f_listItem = $('<li />', { 
                            class: 'f_list-item' + ' ' + index,
                            'f_list-index': index,
                        })
                        $f_listItem.appendTo($f_list);
                        var $f_listData = $('<div />', {
                            class: 'f_list-item-data',
                        })
                        .text($list[i]);
                        $f_listData.appendTo($f_listItem);
                        var $f_listPointer = $('<div />', {
                            class: 'f_list-item-pointer',
                        })
                        .text('*next');
                        $f_listData.after($f_listPointer);
                        index++;
                        if(i === 0) {
                            var $f_listArrow = $('<div />', {
                                class: 'arrow',
                            });
                            var $f_listLine = $('<div />', {
                                class: 'line',
                            });
                            var $f_listPoint = $('<div />', {
                                class: 'point',
                            });
                            $f_listArrow.append($f_listLine);
                            $f_listArrow.append($f_listPoint);
                            $f_listHead.after($f_listArrow);
                        }
                        var $f_listArrow = $('<div />', {
                            class: 'arrow',
                        });
                        var $f_listLine = $('<div />', {
                            class: 'line',
                        });
                        var $f_listPoint = $('<div />', {
                            class: 'point',
                        });
                        $f_listArrow.append($f_listLine);
                        $f_listArrow.append($f_listPoint);
                        $f_listItem.after($f_listArrow);
                    }
                    $('.forward_list-info').addClass('active');
                    $('.forward_list-size-p').text(' ' + index);
                }
                else {
                    $('.assign-initializer-list').val('');
                    $('.f_list').remove();
                    index = 0;
                    var $f_list = $('<li />', { 
                        class: 'f_list',
                        'forward_list-size': $val
                    })
                    $('.forward_list-info').after($f_list);
                    for (var i = 0; i < $list.length; i++) {
                        if(i === 0) {
                            var $f_listHead = $('<li />', { 
                                class: 'f_listHead-item',
                                'f_list-index': 'head',
                            })
                            .text('HEAD');
                            $f_listHead.appendTo($f_list);
                        }
                        var $f_listItem = $('<li />', { 
                            class: 'f_list-item' + ' ' + index,
                            'f_list-index': index,
                        })
                        $f_listItem.appendTo($f_list);
                        var $f_listData = $('<div />', {
                            class: 'f_list-item-data',
                        })
                        .text($list[i]);
                        $f_listData.appendTo($f_listItem);
                        var $f_listPointer = $('<div />', {
                            class: 'f_list-item-pointer',
                        })
                        .text('*next');
                        $f_listData.after($f_listPointer);
                        index++;
                        if(i === 0) {
                            var $f_listArrow = $('<div />', {
                                class: 'arrow',
                            });
                            var $f_listLine = $('<div />', {
                                class: 'line',
                            });
                            var $f_listPoint = $('<div />', {
                                class: 'point',
                            });
                            $f_listArrow.append($f_listLine);
                            $f_listArrow.append($f_listPoint);
                            $f_listHead.after($f_listArrow);
                        }
                        var $f_listArrow = $('<div />', {
                            class: 'arrow',
                        });
                        var $f_listLine = $('<div />', {
                            class: 'line',
                        });
                        var $f_listPoint = $('<div />', {
                            class: 'point',
                        });
                        $f_listArrow.append($f_listLine);
                        $f_listArrow.append($f_listPoint);
                        $f_listItem.after($f_listArrow);
                    }
                    $('.forward_list-size-p').text(' ' + index);
                }
                var $f_listNullItem = $('<li />', { 
                    class: 'f_listNull-item',
                    'f_list-index': 'null',
                })
                .text('NULL');
                $('.f_list .arrow:last').after($f_listNullItem);
            }
            else {
                $('.return,.output').text('Incorrect param!');
            }
        }
    }
});

$('.empty-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return').text('true');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0){
        $('.return').text('false');
    }
    else {
        $('.return,.output').text('No list!');
    }
});

$('.reverse-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') !== true && index === 0) {
        $('.return,.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return,.output').text('');
        var $size = Math.floor(index/2) + 1;
        for(var i = 2; i <= $size; i++ ) {
            /*$('.f_list .f_list-item:nth-of-type('+i+')');*/ /*Note: This will result in undefined for the first index because the head                                                                   includes .f_list-item in the class name. So index should start at 2.*/
            var $index_from_front = $('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html();
            var $index_from_back = $('.f_list .f_list-item:nth-last-of-type('+i+')'+' .f_list-item-data').html();
            $('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html($index_from_back);
            $('.f_list .f_list-item:nth-last-of-type('+i+')'+' .f_list-item-data').html($index_from_front);
            
        }   
    }
    else {
        $('.return,.output').text('No list!');
    }
});

$('.sort-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return,.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return,.output').text('');
        var $size = index + 1;
        var $array = [];
        for(var i = 2; i <= $size; i++) {
            $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
        }
        /*Default sort (operator is "<")*/
        if ($('.sort-text').val() == '') {
            /*If negative number is returned, a is less than b, so it is placed to the left of b. 
              If positive number is returned, a is placed to the right of b.*/
            $array.sort(function(a,b){return a-b});
        }
        else if (/^greater$/i.test($('.sort-text').val()) === true) {
            $array.sort(function(a,b){return b-a});
        }
        else if(/^greater$/i.test($('.sort-text').val()) === false) {
            $('.return,.output').css('font-size','2em').text('Unrecognized operator!');
        }
        /*More pred conditions later here*/
        for(var i = 2; i <= $size; i++) {
            $('.f_list .f_list-item:nth-of-type('+i+')'+ ' .f_list-item-data').html($array[i-2]);
        }
    }
    else {
        $('.return,.output').text('No list!');
    }
});

$('.unique-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return,.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return,.output').text('');
        var $size = index + 1;
        var $array = [];
        for(var i = 2; i <= $size; i++) {
            $array.push($('.f_list .f_list-item:nth-of-type('+i+')'+' .f_list-item-data').html());
        }
        function checkDuplicate($element,current_Index) {
            for (var i = 0; i < current_Index; i++) {
                if ($array[i] === $element) {
                    return true;
                    break;
                }
                else if($array[i] !== $element && i === current_Index) {return false;}
                else {continue;}
            }
        }
        var $index_Remove = 3;
        var $current_List_Size = index;
        for(var i = 0; i < $array.length; i++) {
            if(i !== 0) {
                if(checkDuplicate($array[i],i) === true) {
                    $('.f_list .f_list-item:nth-of-type('+$index_Remove+')').remove();
                    $('.f_list .arrow:nth-of-type('+$index_Remove+')').remove();
                    $('.forward_list-size-p').html(--$current_List_Size);
                }
                else {
                    $index_Remove++;
                }
            }
        }
    }
    else {
        $('.return,.output').text('No list!');
    }
});

$('.emplace_front-btn').on('click', function() {
    var $val = $('.emplace_front-text').val();
    if($('.forward_list-info').hasClass('active') === true && /[^0-9]/.test($val) === true) {
        $('.return,.output').text('Digits only!');
    }
    else if($('.forward_list-info').hasClass('active') === true && /([0-9]{2,})$/.test($val) === true) {
        $('.return,.output').css({'font-size':'3em', 'line-height':'30px'}).text('Too many digits! 0-9 only!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return,.output').text('');
        var $f_listHead = $('<li />', { 
            class: 'f_listHead-item',
            'f_list-index': 'head',
        })
        .text('HEAD');
        $f_listHead.appendTo('.f_list');
        var $f_listItem = $('<li />', { 
            class: 'f_list-item' + ' ' + index,
            'f_list-index': index,
        })
        $f_listItem.appendTo('.f_list');
        var $f_listData = $('<div />', {
            class: 'f_list-item-data',
        })
        .text($val);
        $f_listData.appendTo($f_listItem);
        var $f_listPointer = $('<div />', {
            class: 'f_list-item-pointer',
        })
        .text('*next');
        $f_listData.after($f_listPointer);
        var $f_listArrow = $('<div />', {
            class: 'arrow',
        });
        var $f_listLine = $('<div />', {
            class: 'line',
        });
        var $f_listPoint = $('<div />', {
            class: 'point',
        });
        $f_listArrow.append($f_listLine);
        $f_listArrow.append($f_listPoint);
        $f_listHead.after($f_listArrow);
        var $f_listArrow = $('<div />', {
            class: 'arrow',
        });
        var $f_listLine = $('<div />', {
            class: 'line',
        });
        var $f_listPoint = $('<div />', {
            class: 'point',
        });
        $f_listArrow.append($f_listLine);
        $f_listArrow.append($f_listPoint);
        $f_listItem.after($f_listArrow);
        index++;
        $('.forward_list-size-p').text(' ' + index);
        var $f_listNullItem = $('<li />', { 
            class: 'f_listNull-item',
            'f_list-index': 'null',
        })
        .text('NULL');
        $('.arrow:last').after($f_listNullItem);
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return,.output').text('');
        var $f_listItem = $('<li />', { 
            class: 'f_list-item' + ' ' + 0,
            'f_list-index': 0,
        })
        $f_listItem.insertAfter('.f_list .arrow:first');
        var $f_listData = $('<div />', {
            class: 'f_list-item-data',
        })
        .text($val);
        $f_listData.appendTo($f_listItem);
        var $f_listPointer = $('<div />', {
            class: 'f_list-item-pointer',
        })
        .text('*next');
        $f_listData.after($f_listPointer);
        var $f_listArrow = $('<div />', {
            class: 'arrow',
        });
        var $f_listLine = $('<div />', {
            class: 'line',
        });
        var $f_listPoint = $('<div />', {
            class: 'point',
        });
        $f_listArrow.append($f_listLine);
        $f_listArrow.append($f_listPoint);
        $f_listItem.after($f_listArrow);
        index++;
        $('.forward_list-size-p').text(' ' + index);
        var $newIndex = 0;
        var $size = index + 1;
        for(var i= 3; i <= $size; i++) {
            $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
            $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
        }
    }
    else {
        $('.return,.output').text('No list!');
    }
});

$('.pop_front-btn').on('click', function() {
    if($('.forward_list-info').hasClass('active') === true && index === 0) {
        $('.return,.output').text('Empty!');
    }
    else if($('.forward_list-info').hasClass('active') === true && index !== 0) {
        $('.return,.output').text('');
        $('.f_list .f_list-item:nth-of-type(2)').remove();
        $('.f_list .arrow:nth-of-type(2)').remove();
        $('.forward_list-size-p').html(--index);
    }
    else {
        $('.return,.output').text('No list!');
    }
});

/*Drop Down Menu for Iterator Template*/
function dropDownIteratorList(list,dropDownButton,event) {
    if((!$(event.target).hasClass(list) && $('.'+list).css('visibility') === 'visible')
       || ($(event.target).parent().hasClass(dropDownButton) && $('.'+list).css('visibility')=== 'visible')) {
        $('.'+list).css('visibility','hidden');
    }
    else if($(event.target).parent().hasClass(dropDownButton) && $('.'+list).css('visibility') === 'hidden') {
        $('.'+list).css('visibility','visible');
    }
}

/*Drop Down Menu Choosing Iterator Template*/
function chooseIterator(position,list,chosenIterator) {
    $(position).text(chosenIterator.text());
    $(list).css('visibility','hidden');
}

/*Drop-Down menu for Emplace After Iterator*/
$('body').on('click', function(e) {
    dropDownIteratorList('emplace_after_iterator-position-list','emplace_after-iterator-btn',e);
});

$('.emplace_after_iterator-position-list li').on('click', function(e) {
    chooseIterator('.emplace_after-position','.emplace_after_iterator-position-list',$(this));
});

$('body').on('click', function(e) {
    dropDownIteratorList('assign_iterator-first-position-list','assign-iterator-first-btn',e);
});

$('.assign_iterator-first-position-list li').on('click', function(e) {
    chooseIterator('.assign-position-first','.assign_iterator-first-position-list',$(this));
});

$('body').on('click', function(e) {
    dropDownIteratorList('assign_iterator-last-position-list','assign-iterator-last-btn',e);
});

$('.assign_iterator-last-position-list li').on('click', function(e) {
    chooseIterator('.assign-position-last','.assign_iterator-last-position-list',$(this));
});

$('.emplace_after-btn').on('click', function() {
    var $position = $('.emplace_after-position').val();
    var $val = $('.emplace_after-val').val();
    if($('.forward_list-info').hasClass('active') === true 
       && /[^0-9]/.test($val) === true 
       && $position === 'Choose') {
        
         $('.return,.output').css({'font-size':'3.2em', 'line-height':'30px'}).text('Digits only! No iterator!');
    }
    else if($('.forward_list-info').hasClass('active') === true 
            && /([0-9]{2,})$/.test($val) === true
            && $position === 'Choose') {
        
        $('.return,.output').css({'font-size':'2.5em', 'line-height':'30px'}).text('Too many digits! 0-9 only! No iterator!');
    }
    else if($('.forward_list-info').hasClass('active') === true 
            && /[^0-9]/.test($val) === true 
            && $position !== 'Choose') {
    
        $('.return,.output').text('Digits only!');
    }
    else if($('.forward_list-info').hasClass('active') === true
            && /([0-9]{2,})$/.test($val) === true
            && $position !== 'Choose') {
        
        $('.return,.output').css({'font-size':'2.7em', 'line-height':'30px'}).text('Too many digits! 0-9 only!');
    }
    else if($('.forward_list-info').hasClass('active') === true && $position !== 'Choose') {
        if($position === '') {
            $('.return,.output').text('No pos!');
        }
        else if($position === 'f_list.end()') {
            $('.return,.output').text('Pos out of range!');
        }
        else if(($position === 'f_list.begin()' || $position === 'std::forward_list<int>iterator mid') && index === 0) {
            $('.return,.output').css('font-size','1.5em').css('line-height','30px').text('Runtime Error! Empty list- undefined behavior!');
        }
        else if($position === 'f_list.begin()' && index !== 0) {
            $('.return').css('font-size','1.5em').css('line-height','30px').text('std::forward_list<int>iterator it');
            var $f_listItem = $('<li />', { 
                class: 'f_list-item' + ' ' + 1,
                'f_list-index': 1,
            })
            $f_listItem.insertAfter('.f_list .arrow:nth-of-type(2)');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
            var $f_listArrow = $('<div />', {
                class: 'arrow',
            });
            var $f_listLine = $('<div />', {
                class: 'line',
            });
            var $f_listPoint = $('<div />', {
                class: 'point',
            });
            $f_listArrow.append($f_listLine);
            $f_listArrow.append($f_listPoint);
            $f_listItem.after($f_listArrow);
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $newIndex = 1;
            var $size = index + 1;
            for(var i= 4; i <= $size; i++) {
                $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
                $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
            }
        }
        else if($position === 'f_list.before_begin()' && index === 0) {
            $('.return').css('font-size','1.5em').css('line-height','30px').text('std::forward_list<int>iterator it');
            var $f_listHead = $('<li />', { 
            class: 'f_listHead-item',
            'f_list-index': 'head',
            })
            .text('HEAD');
            $f_listHead.appendTo('.f_list');
            var $f_listItem = $('<li />', { 
                class: 'f_list-item' + ' ' + index,
                'f_list-index': index,
            })
            $f_listItem.appendTo('.f_list');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
            var $f_listArrow = $('<div />', {
                class: 'arrow',
            });
            var $f_listLine = $('<div />', {
                class: 'line',
            });
            var $f_listPoint = $('<div />', {
                class: 'point',
            });
            $f_listArrow.append($f_listLine);
            $f_listArrow.append($f_listPoint);
            $f_listHead.after($f_listArrow);
            var $f_listArrow = $('<div />', {
                class: 'arrow',
            });
            var $f_listLine = $('<div />', {
                class: 'line',
            });
            var $f_listPoint = $('<div />', {
                class: 'point',
            });
            $f_listArrow.append($f_listLine);
            $f_listArrow.append($f_listPoint);
            $f_listItem.after($f_listArrow);
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $f_listNullItem = $('<li />', { 
                class: 'f_listNull-item',
                'f_list-index': 'null',
            })
            .text('NULL');
            $('.arrow:last').after($f_listNullItem);
        }
        else if($position === 'f_list.before_begin()' && index !== 0) {
            $('.return').css('font-size','1.5em').css('line-height','30px').text('std::forward_list<int>iterator it');
            var $f_listItem = $('<li />', { 
                class: 'f_list-item' + ' ' + 0,
                'f_list-index': 0,
            })
            $f_listItem.insertAfter('.f_list .arrow:first');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
            var $f_listArrow = $('<div />', {
                class: 'arrow',
            });
            var $f_listLine = $('<div />', {
                class: 'line',
            });
            var $f_listPoint = $('<div />', {
                class: 'point',
            });
            $f_listArrow.append($f_listLine);
            $f_listArrow.append($f_listPoint);
            $f_listItem.after($f_listArrow);
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $newIndex = 0;
            var $size = index + 1;
            for(var i= 3; i <= $size; i++) {
                $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
                $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
            }
        }
        else if($position === 'std::forward_list<int>iterator mid' && index !== 0) {
            $('.return').css('font-size','1.5em').css('line-height','30px').text('std::forward_list<int>iterator it');
            var f_list2_Mid = Math.floor(index/2)+2;
            var f_list2_Mid_Index = f_list2_Mid + 1;
            var $f_listItem = $('<li />', { 
                class: 'f_list-item',
                'f_list-index': f_list2_Mid_Index,
            })
            $f_listItem.insertAfter('.f_list .arrow:nth-of-type('+f_list2_Mid+')');
            var $f_listData = $('<div />', {
                class: 'f_list-item-data',
            })
            .text($val);
            $f_listData.appendTo($f_listItem);
            var $f_listPointer = $('<div />', {
                class: 'f_list-item-pointer',
            })
            .text('*next');
            $f_listData.after($f_listPointer);
            var $f_listArrow = $('<div />', {
                class: 'arrow',
            });
            var $f_listLine = $('<div />', {
                class: 'line',
            });
            var $f_listPoint = $('<div />', {
                class: 'point',
            });
            $f_listArrow.append($f_listLine);
            $f_listArrow.append($f_listPoint);
            $f_listItem.after($f_listArrow);
            index++;
            $('.forward_list-size-p').text(' ' + index);
            var $newIndex = 1;
            var $size = index + 1;
            for(var i= 4; i <= $size; i++) {
                $('.f_list .f_list-item:nth-of-type('+i+')').removeClass($newIndex.toString()).addClass((++$newIndex).toString());
                $('.f_list .f_list-item:nth-of-type('+i+')').attr('f_list-index',$newIndex.toString());
            } 
        }
    }
    else {
        $('.return,.output').text('No list!');
    }
});

/*Drop-Down menu for Assign Parameter Choice*/
$('body').on('click', function(e) {
    if(((!$(e.target).hasClass('assign-parameter-choice-list') && $('.assign-parameter-choice-list').css('visibility') === 'visible')) ||
    ($(e.target).parent().hasClass('assign-parameter-choice-btn') && $('.assign-parameter-choice-list').css('visibility') === 'visible')){
        $('.assign-parameter-choice-list').css('visibility','hidden');
    }
    else if($(e.target).parent().hasClass('assign-parameter-choice-btn') && $('.assign-parameter-choice-list').css('visibility') === 'hidden') {
        $('.assign-parameter-choice-list').css('visibility','visible');
    }
});

$('.assign-parameter-choice-list li').on('click', function(e) {
    if($(e.target).hasClass('assign-choice_2')) {
        $('.assign-div').css('width','580px');
    }
    $('.assign-parameter-choice-div').hide();
    $('.assign-parameter-choice-list').css('visibility','hidden');
    $('.'+$(this).text()).css('display','inline');
    $('.go_back-arrow').removeAttr('hidden');
});

$('.assign-div .go_back-arrow').on('click', function() {
    if(!$('.assign-parameter-choice-div').is(':visible')) {
        $('.assign-div').css('width','250px');
        //First div that is shown on the assign-div
        $('.assign-div > div').hide();
        $('.assign-parameter-choice-div').show();
        $('.go_back-arrow').attr('hidden','');
    }
});