const input = document.querySelector('#input');
const chatContainer = document.querySelector('#chat-container');



input?.addEventListener('keyup', handleEnter);

function generate(text) {
//     append message to UI 
//     send it to the LLM 
//     append response to the UI
    const msg = document.createElement('div')
    msg.className = `my-6 bg-neutral-800 p-3 rounded-xl ml-auto max-w-fit`
    msg.textContent = text
    chatContainer.appendChild(msg);
    input.value = '';
 }


function handleEnter(e) {
    if(e.key === 'Enter') {
        const text = input?.value.trim();
        if(!text) {
            return;
        }


        generate(text)

        
    }
}