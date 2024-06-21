/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a la calculadora, que operacion basica desear realizar? prueba diciendo "suma 5 y 6" u otra operacion';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('no entendi, intentalo de nuevo')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno + numDos;
        const speakOutput = `Hola papu el resultado de la suma de ${numUno} mas ${numDos} es ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('puedes decir otra  operacion como resta, prueba diciendo  resta 6 con 7')
            .getResponse();
    }

};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('no entendi, intentalo de nuevo')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno - numDos;
        const speakOutput = `Hola papu el resultado de la resta de ${numUno} menos ${numDos} es ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('puedes decir otra  operacion como multiplicacion, prueba diciendo  multiplica  6 por 7')
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('no entendi, intentalo de nuevo')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno * numDos;
        const speakOutput = `Hola papu el resultado de la multiplicacion de ${numUno} por ${numDos} es ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('no entendi, intentalo de nuevo')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno / numDos;
        const speakOutput = `Hola papu el resultado de la division de ${numUno} entre ${numDos} es ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const CosenoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CosenoIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.num.value;
        
        var num= Number(cantidad)
    
        if (isNaN(num)){
            return handlerInput.responseBuilder
                .speak('no entendi, intentalo de nuevo')
                .getResponse();
        }
        let resultado=0;
        resultado= Math.cos(num * (Math.PI / 180));
        const speakOutput = `Hola papu el coseno de ${num} es ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const LogaritmoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LogaritmoIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.num.value;
        
        var num= Number(cantidad)
    
        if (isNaN(num)){
            return handlerInput.responseBuilder
                .speak('no entendi, intentalo de nuevo')
                .getResponse();
        }
        let resultado=0;
        resultado= Math.log(num);
        const speakOutput = `Hola papu el logaritmo de ${num} es ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¿En que puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios gracias por usar la calculadora!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        CosenoIntentHandler,
        LogaritmoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();