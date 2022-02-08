function getScreen() {
    return $('#screen').val()
}
function setScreen(a) {
    if (getScreen().length < 10) {
        if (getScreen() == '0') {
            $('#screen').attr('value', a)
            return
        } else {
            $('#screen').attr('value', getScreen() + a)
        }
        return
    }
    return
}
function clearScreen() {
    $('#screen').attr('value', '0')
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
function clearSubScreen() {
    $('#sub-screen').attr('value', '')
    return
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
function negative() {
    $('#screen').attr('value', parseFloat(getScreen()) * -1)
    return
}
function result(a, b) {
    switch (b) {
        case '+':
            return sum(a, getScreen())
        case '-':
            return subtract(a, getScreen())
        case '*':
            return multiply(a, getScreen())
        case '/':
            return divide(a, getScreen())
        default:
            alert('Ops! Ocorreu um erro de sintaxe! ¯\\_(ツ)_/¯')
            break
    }
    return
}

$(document).ready(function () {
    var varNumber
    var varOperation
    var varOperationCall
    var varResult
    var varResultCall

    setScreen('0')
    $('#btn-0').click(function () {
        setScreen('0')
    }),
        $('#btn-1').click(function () {
            if (varResultCall) {
                clearScreen()
                setScreen('1')
                varCallResult = false
            } else {
                setScreen('1')
            }
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
        $('#btn-negative').click(function () {
            negative()
        }),
        $('#btn-clear').click(function () {
            clearScreen()
            clearSubScreen()
            varNumber = null
            varOperation = null
            varOperationCall = null
            varResult = null
            varResultCall = null

        }),
        $('#btn-sum').click(function () {
            if (varOperationCall && !varResultCall) {
                varOperation = '+'
                varNumber = result(varNumber, varOperation)
                $('#sub-screen').attr('value', `${varNumber} ${varOperation}`)
                clearScreen()
            } else if (varResultCall) {
                varOperation = '+'
                varNumber = varResult
                $('#sub-screen').attr('value', `${varNumber} ${varOperation}`)
                clearScreen()
                varResultCall = false
            } else {
                varNumber = getScreen()
                varOperation = setSubScreen('+')
                varOperationCall = true
            }
        }),
        $('#btn-subtract').click(function () {
            varNumber = getScreen()
            varOperation = '-'
            setSubScreen(varOperation)
        }),
        $('#btn-multiply').click(function () {
            varNumber = getScreen()
            varOperation = '*'
            setSubScreen(varOperation)
        }),
        $('#btn-divide').click(function () {
            varNumber = getScreen()
            varOperation = '/'
            setSubScreen(varOperation)
        }),
        $('#btn-result').click(function () {
            if (getScreen() == '0' || varResultCall == true) {
                alert('Ops! Ocorreu um erro de sintaxe! ¯\\_(ツ)_/¯')
            } else {
                setSubScreen(getScreen())
                varResult = result(varNumber, varOperation)
                clearScreen()
                setScreen(varResult)
                varResultCall = true
            }
        })
})