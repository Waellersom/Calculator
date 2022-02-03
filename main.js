function getScreen() {
    return $('#screen').val()
}
function setScreen(a) {
    $('#screen').attr('value', a)
    return
}
function setSubScreen(a, b, c) {
    $('#sub-screen').attr('value', b + ' ' + a + ' ' + c)
    setScreen('0')
    return a
}
function clear() {
    $('#screen').attr('value', '0')
    $('#sub-screen').attr('value', '')
    return
}
function sum(a, b) {
    return parseFloat(a) + parseFloat(b)
}
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
}
function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
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
function result(a, b, c) {
    switch (a) {
        case '+':
            setSubScreen(a, b, c)
            setScreen(parseFloat(b) + parseFloat(c))
            break
        case '*':
            setSubScreen(a, b, c)
            setScreen(parseFloat(b) * parseFloat(c))
            break
    }
    return
}

$(document).ready(function () {
    var varOpe
    var varScr
    setScreen('0')
    $('#btn-0').click(function () {
        setScreen(insert('0', getScreen()))
    }),
        $('#btn-1').click(function () {
            setScreen(insert('1', getScreen()))
        }),
        $('#btn-2').click(function () {
            setScreen(insert('2', getScreen()))
        }),
        $('#btn-3').click(function () {
            setScreen(insert('3', getScreen()))
        }),
        $('#btn-4').click(function () {
            setScreen(insert('4', getScreen()))
        }),
        $('#btn-5').click(function () {
            setScreen(insert('5', getScreen()))
        }),
        $('#btn-6').click(function () {
            setScreen(insert('6', getScreen()))
        }),
        $('#btn-7').click(function () {
            setScreen(insert('7', getScreen()))
        }),
        $('#btn-8').click(function () {
            setScreen(insert('8', getScreen()))
        }),
        $('#btn-9').click(function () {
            setScreen(insert('9', getScreen()))
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