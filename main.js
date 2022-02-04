function getScreen() {
    return $('#screen').val()
}
function setScreen(a, b) {
    if (b) {
        clear('soft')
    }
    if (getScreen().length < 10) {
        if (getScreen() == '0') {
            $('#screen').attr('value', a)
            return false
        } else {
            $('#screen').attr('value', getScreen() + a)
        }
        return false
    }
    return false
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
function clear(a) {
    switch (a) {
        case 'soft':
            $('#screen').attr('value', '')
            break
        case 'hard':
            $('#screen').attr('value', '0')
            $('#sub-screen').attr('value', '')
            return undefined
    }
    return
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
function negative() {
    setScreen(parseFloat(getScreen()) * -1, true)
    return
}
function result(a, b, c) {
    switch (b) {
        case '+':
            setSubScreen(getScreen())
            $('#screen').attr('value', '')
            $('#screen').attr('value', sum(a, c))
            return true
        case '-':
            setSubScreen(getScreen())
            $('#screen').attr('value', '')
            $('#screen').attr('value', subtract(a, c))
            return true
        case '*':
            setSubScreen(getScreen())
            $('#screen').attr('value', '')
            $('#screen').attr('value', multiply(a, c))
            return true
        case '/':
            setSubScreen(getScreen())
            $('#screen').attr('value', '')
            $('#screen').attr('value', divide(a, c))
            return true
    }
    return
}

$(document).ready(function () {
    var varNumber
    var varOperation
    var callResult
    setScreen('0', false)
    $('#btn-0').click(function () {
        callResult = setScreen('0', callResult)
    }),
        $('#btn-1').click(function () {
            callResult = setScreen('1', callResult)
        }),
        $('#btn-2').click(function () {
            callResult = setScreen('2', callResult)
        }),
        $('#btn-3').click(function () {
            callResult = setScreen('3', callResult)
        }),
        $('#btn-4').click(function () {
            callResult = setScreen('4', callResult)
        }),
        $('#btn-5').click(function () {
            callResult = setScreen('5', callResult)
        }),
        $('#btn-6').click(function () {
            callResult = setScreen('6', callResult)
        }),
        $('#btn-7').click(function () {
            callResult = setScreen('7', callResult)
        }),
        $('#btn-8').click(function () {
            callResult = setScreen('8', callResult)
        }),
        $('#btn-9').click(function () {
            callResult = setScreen('9', callResult)
        }),
        $('#btn-negative').click(function () {
            negative()
        }),
        $('#btn-clear').click(function () {
            [varNumber, varOperation, callResult] = Array().fill(clear('hard'))
        }),
        $('#btn-sum').click(function () {
            varNumber = getScreen()
            varOperation = setSubScreen('+')
        }),
        $('#btn-subtract').click(function () {
            varNumber = getScreen()
            varOperation = setSubScreen('-')
        }),
        $('#btn-multiply').click(function () {
            varNumber = getScreen()
            varOperation = setSubScreen('*')
        }),
        $('#btn-divide').click(function () {
            varNumber = getScreen()
            varOperation = setSubScreen('/')
        }),
        $('#btn-result').click(function () {
            callResult = result(varNumber, varOperation, getScreen())
        })
})