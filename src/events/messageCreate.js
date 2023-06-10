const commands = [
    {
        messages: ['yuuka', 'halo yuuka'],
        exec: message => {
            message.channel.send('Halo Dipras Sensei, apakah ada yang bisa saya bantu?')
        }
    },
    {
        messages: ['siapa aku?'],
        exec: message => {
            message.channel.send("Dipras Alzack, Creator ku sekaligus suami ku")
        }
    },
    {
        messages: ['hapus chat'],
        exec: message => {
            message.channel.send("Baik sensei, semua message di channel ini akan jadi rahasia kita berdua saja ya ~");
            message.channel.send("Semua message di channel ini akan di hapus dalam 5 detik");
            setTimeout(() => {
                message.channel.bulkDelete(100, true)
            }, 5000);
        }
    },

]


const messageCreate = (message) => {
    for (var command of commands) {
        if (command.messages.includes(message.content.toLowerCase())) command.exec(message);
    }
}

export default messageCreate;