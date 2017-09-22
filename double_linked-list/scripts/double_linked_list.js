var index = 0;
var displayMenu = function() {
    
}

$('.create-btn').on('click', function(){
    $('.return').text('');
    $('.output').text('');
    if ($('.create-text').val() !== '') {
        if (index === 0) {
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $list = $('<ul />', { 
                class: 'list',
                //class attribute
                'forward_list-size': $val,       
            })
            //after element with class '.forward_list-info'
            $('.list-info').after($list);
            for (var i = 0; i < $val; i++) {
                if(i === 0) {
                    var $list_Head = $('<li />', { 
                        class: 'list_Head-item',
                        'list-index': 'head',
                    })
                    .text('HEAD');
                    $list_Head.appendTo($list);
                }
                var $randVal = 1 + Math.floor(Math.random() * 9);
                var $list_Item = $('<li />', { 
                    class: 'list-item' + ' ' + index,
                    'list-index': index,
                })
                $list_Item.appendTo($list);
                var $list_Previous_Pointer = $('<div />', {
                    class: 'list-item-previous-pointer',
                })
                .text('*prev');
                $list_Previous_Pointer.appendTo($list_Item);
                var $list_Data = $('<div />', {
                    class: 'list-item-data',
                })
                .text($randVal);
                $list_Previous_Pointer.after($list_Data); 
                var $list_Next_Pointer = $('<div />', {
                    class: 'list-item-next-pointer',
                })
                .text('*next');
                $list_Data.after($list_Next_Pointer);
                index++;
                if(i === 0) {
                    var $list_Arrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $list_Forward_Line = $('<div />', {
                        class: 'forward_line',
                    });
                    var $list_Forward_Point = $('<div />', {
                        class: 'forward_point',
                    });
                    $list_Arrow.append($list_Forward_Line);
                    $list_Arrow.append($list_Forward_Point);
                    var $list_Backward_Line = $('<div />', {
                        class: 'backward_line',
                    });
                    var $list_Backward_Point = $('<div />', {
                        class: 'backward_point', 
                    });
                    $list_Arrow.append($list_Backward_Line);
                    $list_Arrow.append($list_Backward_Point);
                    $list_Head.after($list_Arrow);
                }
                var $list_Arrow = $('<div />', {
                    class: 'arrow',
                });
                var $list_Forward_Line = $('<div />', {
                    class: 'forward_line',
                });
                var $list_Forward_Point = $('<div />', {
                    class: 'forward_point',
                });
                $list_Arrow.append($list_Forward_Line);
                $list_Arrow.append($list_Forward_Point);
                var $list_Backward_Line = $('<div />', {
                    class: 'backward_line',
                });
                var $list_Backward_Point = $('<div />', {
                    class: 'backward_point', 
                });
                $list_Arrow.append($list_Backward_Line);
                $list_Arrow.append($list_Backward_Point);
                $list_Item.after($list_Arrow);
            }
            $('.list-info').addClass('active');
            $('.list-size-p').text(' ' + index);
        }
        //If user wants to create another linked-list without refreshing page
        else {
            $('.list-item').remove();
            $('.list').remove();
            index = 0;
            var $val = $('.create-text').val();
            $('.create-text').val('');
            var $list = $('<li />', { 
                class: 'list',
                'list-size': $val
            })
            $('.list-info').after($list);
            for (var i = 0; i < $val; i++) {
                if(i === 0) {
                    var $list_Head = $('<li />', { 
                        class: 'list_Head-item',
                        'list-index': 'head',
                    })
                    .text('HEAD');
                    $list_Head.appendTo($list);
                }
                var $randVal = 1 + Math.floor(Math.random() * 9);
                var $list_Item = $('<li />', { 
                    class: 'list-item' + ' ' + index,
                    'list-index': index,
                })
                $list_Item.appendTo($list);
                var $list_Previous_Pointer = $('<div />', {
                    class: 'list-item-previous-pointer',
                })
                .text('*prev');
                $list_Previous_Pointer.appendTo($list_Item);
                var $list_Data = $('<div />', {
                    class: 'list-item-data',
                })
                .text($randVal);
                $list_Previous_Pointer.after($list_Data); 
                var $list_Next_Pointer = $('<div />', {
                    class: 'list-item-next-pointer',
                })
                .text('*next');
                $list_Data.after($list_Next_Pointer);
                index++;
                if(i === 0) {
                    var $list_Arrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $list_Forward_Line = $('<div />', {
                        class: 'forward_line',
                    });
                    var $list_Forward_Point = $('<div />', {
                        class: 'forward_point',
                    });
                    $list_Arrow.append($list_Forward_Line);
                    $list_Arrow.append($list_Forward_Point);
                    var $list_Backward_Line = $('<div />', {
                        class: 'backward_line',
                    });
                    var $list_Backward_Point = $('<div />', {
                        class: 'backward_point', 
                    });
                    $list_Arrow.append($list_Backward_Line);
                    $list_Arrow.append($list_Backward_Point);
                    $list_Head.after($list_Arrow);
                }
                var $list_Arrow = $('<div />', {
                    class: 'arrow',
                });
                var $list_Forward_Line = $('<div />', {
                    class: 'forward_line',
                });
                var $list_Forward_Point = $('<div />', {
                    class: 'forward_point',
                });
                $list_Arrow.append($list_Forward_Line);
                $list_Arrow.append($list_Forward_Point);
                var $list_Backward_Line = $('<div />', {
                    class: 'backward_line',
                });
                var $list_Backward_Point = $('<div />', {
                    class: 'backward_point', 
                });
                $list_Arrow.append($list_Backward_Line);
                $list_Arrow.append($list_Backward_Point);
                $list_Item.after($list_Arrow);
            }
            $('.list-size-p').text(' ' + index);
        }
        var $list_Null_Item = $('<li />', { 
            class: 'list_Null-item',
            'list-index': 'null',
        })
        .text('NULL');
        $('.arrow:last').after($list_Null_Item);
    }
});

$('.front-btn').on('click', function(){
    if($('.list-info').hasClass('active') === true && index !== 0) {
        $('.return').text($('.list li:nth-of-type(2) .list-item-data').html());
        $('.output').text('No output');
    }
    else if($('.list-info').hasClass('active') === true && index === 0){
        
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

$('.back-btn').on('click', function() {
    if($('.list-info').hasClass('active') === true && index !== 0) {
        var $last_Element = index+1;
        $('.return').text($('.list li:nth-of-type('+$last_Element+')'+' .list-item-data').html());
        $('.output').text('No output');
    }
    else if($('.list-info').hasClass('active') === true && index === 0){
        
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

/*Fill*/
$('.assign-btn').on('click', function() {
    $('.return').text('');
    $('.output').text('');
    if($('.assign-size').val() !== '' && $('.assign-val').val() !== '') {
        if(index !== 0) {
            $('.list-item').remove();
            $('.list').remove();
            index = 0;
            var $size = $('.assign-size').val();
            var $val = $('.assign-val').val();
            $('.assign-size').val('');
            $('.assign-val').val('');
            var $list = $('<ul />', { 
                class: 'list',
                //class attribute
                'list-size': $size,       
            })
            $('.list-info').after($list);
            for (var i = 0; i < $size; i++) {
                if(i === 0) {
                    var $list_Head = $('<li />', { 
                        class: 'list_Head-item',
                        'list-index': 'head',
                    })
                    .text('HEAD');
                    $list_Head.appendTo($list);
                }
                var $list_Item = $('<li />', { 
                    class: 'list-item' + ' ' + index,
                    'list-index': index,
                })
                $list_Item.appendTo($list);
                var $list_Previous_Pointer = $('<div />', {
                    class: 'list-item-previous-pointer',
                })
                .text('*prev');
                $list_Previous_Pointer.appendTo($list_Item);
                var $list_Data = $('<div />', {
                    class: 'list-item-data',
                })
                .text($val);
                $list_Previous_Pointer.after($list_Data); 
                var $list_Next_Pointer = $('<div />', {
                    class: 'list-item-next-pointer',
                })
                .text('*next');
                $list_Data.after($list_Next_Pointer);
                index++;
                if(i === 0) {
                    var $list_Arrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $list_Forward_Line = $('<div />', {
                        class: 'forward_line',
                    });
                    var $list_Forward_Point = $('<div />', {
                        class: 'forward_point',
                    });
                    $list_Arrow.append($list_Forward_Line);
                    $list_Arrow.append($list_Forward_Point);
                    var $list_Backward_Line = $('<div />', {
                        class: 'backward_line',
                    });
                    var $list_Backward_Point = $('<div />', {
                        class: 'backward_point', 
                    });
                    $list_Arrow.append($list_Backward_Line);
                    $list_Arrow.append($list_Backward_Point);
                    $list_Head.after($list_Arrow);
                }
                var $list_Arrow = $('<div />', {
                    class: 'arrow',
                });
                var $list_Forward_Line = $('<div />', {
                    class: 'forward_line',
                });
                var $list_Forward_Point = $('<div />', {
                    class: 'forward_point',
                });
                $list_Arrow.append($list_Forward_Line);
                $list_Arrow.append($list_Forward_Point);
                var $list_Backward_Line = $('<div />', {
                    class: 'backward_line',
                });
                var $list_Backward_Point = $('<div />', {
                    class: 'backward_point', 
                });
                $list_Arrow.append($list_Backward_Line);
                $list_Arrow.append($list_Backward_Point);
                $list_Item.after($list_Arrow);
            }
        $('.list-size-p').text(' ' + index);
        }
        else {
            var $size = $('.assign-size').val();
            var $val = $('.assign-val').val();
            $('.assign-size').val('');
            $('.assign-val').val('');
            var $list = $('<ul />', { 
                class: 'list',
                //class attribute
                'list-size': $size,       
            })
            $('.list-info').after($list);
            for (var i = 0; i < $size; i++) {
                if(i === 0) {
                    var $list_Head = $('<li />', { 
                        class: 'list_Head-item',
                        'list-index': 'head',
                    })
                    .text('HEAD');
                    $list_Head.appendTo($list);
                }
                var $list_Item = $('<li />', { 
                    class: 'list-item' + ' ' + index,
                    'list-index': index,
                })
                $list_Item.appendTo($list);
                var $list_Previous_Pointer = $('<div />', {
                    class: 'list-item-previous-pointer',
                })
                .text('*prev');
                $list_Previous_Pointer.appendTo($list_Item);
                var $list_Data = $('<div />', {
                    class: 'list-item-data',
                })
                .text($val);
                $list_Previous_Pointer.after($list_Data); 
                var $list_Next_Pointer = $('<div />', {
                    class: 'list-item-next-pointer',
                })
                .text('*next');
                $list_Data.after($list_Next_Pointer);
                index++;
                if(i === 0) {
                    var $list_Arrow = $('<div />', {
                        class: 'arrow',
                    });
                    var $list_Forward_Line = $('<div />', {
                        class: 'forward_line',
                    });
                    var $list_Forward_Point = $('<div />', {
                        class: 'forward_point',
                    });
                    $list_Arrow.append($list_Forward_Line);
                    $list_Arrow.append($list_Forward_Point);
                    var $list_Backward_Line = $('<div />', {
                        class: 'backward_line',
                    });
                    var $list_Backward_Point = $('<div />', {
                        class: 'backward_point', 
                    });
                    $list_Arrow.append($list_Backward_Line);
                    $list_Arrow.append($list_Backward_Point);
                    $list_Head.after($list_Arrow);
                }
                  var $list_Arrow = $('<div />', {
                    class: 'arrow',
                });
                var $list_Forward_Line = $('<div />', {
                    class: 'forward_line',
                });
                var $list_Forward_Point = $('<div />', {
                    class: 'forward_point',
                });
                $list_Arrow.append($list_Forward_Line);
                $list_Arrow.append($list_Forward_Point);
                var $list_Backward_Line = $('<div />', {
                    class: 'backward_line',
                });
                var $list_Backward_Point = $('<div />', {
                    class: 'backward_point', 
                });
                $list_Arrow.append($list_Backward_Line);
                $list_Arrow.append($list_Backward_Point);
                $list_Item.after($list_Arrow);
            }
            $('.list-info').addClass('active');
            $('.list-size-p').text(' ' + index);
        }
         var $list_Null_Item = $('<li />', { 
            class: 'list_Null-item',
            'list-index': 'null',
        })
        .text('NULL');
        $('.arrow:last').after($list_Null_Item);
    }
});

$('.empty-btn').on('click', function() {
    if($('.list-info').hasClass('active') === true && index === 0) {
        $('.return').text('true');
        $('.output').text('No output');
    }
    else if($('.list-info').hasClass('active') === true && index !== 0){
        $('.return').text('false');
        $('.output').text('No output');
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

$('.reverse-btn').on('click', function() {
    if($('.list-info').hasClass('active') === true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        var $size = Math.floor(index/2)+1;
        for(var i = 2; i <= $size; i++ ) {
            /*$('.f_list .f_list-item:nth-of-type('+i+')');*/ /*Note: This will result in undefined for the first index because the head                                                                   includes .f_list-item in the class name. So index should start at 2.*/
            var $index_from_front = $('.list .list-item:nth-of-type('+i+')'+' .list-item-data').html();
            var $index_from_back = $('.list .list-item:nth-last-of-type('+i+')'+' .list-item-data').html();
            $('.list .list-item:nth-of-type('+i+')'+' .list-item-data').html($index_from_back);
            $('.list .list-item:nth-last-of-type('+i+')'+' .list-item-data').html($index_from_front);
            
        }   
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!');
    }
});

$('.sort-btn').on('click', function() {
    if($('.list-info').hasClass('active') === true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        var $size = index + 1;
        var $array = [];
        for(var i = 2; i <= $size; i++) {
            $array.push($('.list .list-item:nth-of-type('+i+')'+' .list-item-data').html());
        }
        /*Default sort (operator is "<")*/
        if ($('.sort-text').val() === '') {
            /*If negative number is returned, a is less than b, so it is placed to the left of b. 
              If positive number is returned, a is placed to the right of b.*/
            $array.sort(function(a,b){return a-b});
        }
        else if ($('.sort-text').val() === 'greater') {
            $array.sort(function(a,b){return b-a});
        }
        /*More pred conditions later here*/
        for(var i = 2; i <= $size; i++) {
            $('.list .list-item:nth-of-type('+i+')'+' .list-item-data').html($array[i-2]);
        }
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!'); 
    }
});

$('.unique-btn').on('click', function() {
    if($('.list-info').hasClass('active') === true && index === 0) {
        $('.return').text('Empty!');
        $('.output').text('Empty!');
    }
    else if($('.list-info').hasClass('active') === true && index !== 0) {
        $('.return').text('');
        $('.output').text('');
        var $size =  index+1;
        var $array = [];
        for(var i = 2; i <= $size; i++) {
            $array.push($('.list .list-item:nth-of-type('+i+')'+' .list-item-data').html());
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
                    $('.list .list-item:nth-of-type('+$index_Remove+')').remove();
                    $('.list .arrow:nth-of-type('+$index_Remove+')').remove();
                    $('.list-size-p').html(--$current_List_Size);
                }
                else {
                    $index_Remove++;
                }
            }
        }
    }
    else {
        $('.return').text('No list!');
        $('.output').text('No list!'); 
    }
});