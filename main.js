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
        }
        return
    }
    return
}
function getSubScreen() {
    return $('#sub-screen').val()
}
function setSubScreen(a) {
    if (getSubScreen() == '') {
        $('#sub-screen').attr('value', `${getScreen()} ${a}`)
        $('#screen').attr('value', '0')
        return a
    } else {
        $('#sub-screen').attr('value', `${getSubScreen()} ${a}`)
    }
    return
}
function newOperatio(a) {
    if (a) {
        clear()
    }
    return false
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
    switch (b) {
        case '+':
            setSubScreen(getScreen())
            $('#screen').attr('value', '')
            $('#screen').attr('value', sum(a, c))
            return true
        case '*':
            setSubScreen(getScreen())
            $('#screen').attr('value', '')
            $('#screen').attr('value', multiply(a, c))
            return true
    }
    return
}

$(document).ready(function () {
    var num
    var ope
    var con
    setScreen('0')
    $('#btn-0').click(function () {
        con = newOperatio(con)
        setScreen('0')
    }),
        $('#btn-1').click(function () {
            con = newOperatio(con)
            setScreen('1')
        }),
        $('#btn-2').click(function () {
            con = newOperatio(con)
            setScreen('2')
        }),
        $('#btn-3').click(function () {
            con = newOperatio(con)
            setScreen('3')
        }),
        $('#btn-4').click(function () {
            con = newOperatio(con)
            setScreen('4')
        }),
        $('#btn-5').click(function () {
            con = newOperatio(con)
            setScreen('5')
        }),
        $('#btn-6').click(function () {
            con = newOperatio(con)
            setScreen('6')
        }),
        $('#btn-7').click(function () {
            con = newOperatio(con)
            setScreen('7')
        }),
        $('#btn-8').click(function () {
            con = newOperatio(con)
            setScreen('8')
        }),
        $('#btn-9').click(function () {
            con = newOperatio(con)
            setScreen('9')
        }),
        $('#btn-clear').click(function () {
            clear()
        }),
        $('#btn-sum').click(function () {
            num = getScreen()
            ope = setSubScreen('+')
        }),
        $('#btn-multiply').click(function () {
            num = getScreen()
            ope = setSubScreen('*')
        }),
        $('#btn-result').click(function () {
            con = result(num, ope, getScreen())
        })
})