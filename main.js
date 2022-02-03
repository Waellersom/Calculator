function observer(a) {
    $('#screen').attr('value', a)
    return
}
function insert(a, b) {
    if (getScreen().length < 10) {
        if (a == '0' && b == '0' || b == '0') {
            return a
        } else {
            return b + a
        }
    } else {
        return b
    }
}
function setSubScreen(a, b, c) {
    $('#sub-screen').attr('value', b + ' ' + a + ' ' + c)
    observer('0')
    return a
}
function getScreen() {
    return $('#screen').val()
}
function clear() {
    setSubScreen('', '', '')
    observer('0')
    return
}
function result(a, b, c) {
    switch (a) {
        case '+':
            setSubScreen(a, b, c)
            observer(parseFloat(b) + parseFloat(c))
            break
        case '*':
            setSubScreen(a, b, c)
            observer(parseFloat(b) * parseFloat(c))
            break
    }
    return
}

$(document).ready(function () {
    var varOpe
    var varScr
    observer('0')
    $('#btn-0').click(function () {
        observer(insert('0', getScreen()))
    }),
        $('#btn-1').click(function () {
            observer(insert('1', getScreen()))
        }),
        $('#btn-2').click(function () {
            observer(insert('2', getScreen()))
        }),
        $('#btn-3').click(function () {
            observer(insert('3', getScreen()))
        }),
        $('#btn-4').click(function () {
            observer(insert('4', getScreen()))
        }),
        $('#btn-5').click(function () {
            observer(insert('5', getScreen()))
        }),
        $('#btn-6').click(function () {
            observer(insert('6', getScreen()))
        }),
        $('#btn-7').click(function () {
            observer(insert('7', getScreen()))
        }),
        $('#btn-8').click(function () {
            observer(insert('8', getScreen()))
        }),
        $('#btn-9').click(function () {
            observer(insert('9', getScreen()))
        }),
        $('#btn-clear').click(function () {
            clear()
        }),
        $('#btn-sum').click(function () {
            varOpe = setSubScreen('+', varScr = getScreen(), '')
        }),
        $('#btn-multiply').click(function () {
            varOpe = setSubScreen('*', varScr = getScreen(), '')
        }),
        $('#btn-result').click(function () {
            result(varOpe, varScr, getScreen())
        })
})