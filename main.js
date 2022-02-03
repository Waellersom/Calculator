function getScreen() {
    return $('#screen').val()
}
function setScreen(a) {
    if (getScreen().length < 10) {
        if (a == '0' && getScreen() == '0' || getScreen() == '0') {
            $('#screen').attr('value', a)
            return
        } else {
            $('#screen').attr('value', getScreen() + a)
            return
        }
        return
    }
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
        setScreen('0')
    }),
        $('#btn-1').click(function () {
            setScreen('1')
        }),
        $('#btn-2').click(function () {
            setScreen('2')
        }),
        $('#btn-3').click(function () {
            setScreen('3')
        }),
        $('#btn-4').click(function () {
            setScreen('4')
        }),
        $('#btn-5').click(function () {
            setScreen('5')
        }),
        $('#btn-6').click(function () {
            setScreen('6')
        }),
        $('#btn-7').click(function () {
            setScreen('7')
        }),
        $('#btn-8').click(function () {
            setScreen('8')
        }),
        $('#btn-9').click(function () {
            setScreen('9')
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