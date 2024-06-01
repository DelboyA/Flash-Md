ghost(
    {
        nomCom: 'alive',
        categorie: 'General'
    }, async (dest, zk, commandeOptions) => {

        const { ms, arg, repondre, superUser } = commandeOptions;

        const data = await getDataFromAlive();

        if (!arg || !arg[0] || arg.join('') === '') {

            if (data) {

                const { message, link } = data;

                var mode = "public";
                if ((s.MODE).toLowerCase() != "yes") {
                    mode = "private";
                }

                moment.tz.setDefault('Africa/Nairobi');

                // Create a date and time in EAT
                const time = moment().format('HH:mm:ss');
                const date = moment().format('DD/MM/YYYY');

                const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Time* : ${time}

 ${message}
 
 
 *Ghost by paky is alive*`

                if (link.match(/\.(mp4|gif)$/i)) {
                    try {
                        zk.sendMessage(dest, { video: { url: link }, caption: alivemsg }, { quoted: ms });
                    }
                    catch (e) {
                        console.log("🥵🥵 Menu error " + e);
                        repondre("🥵🥵 Menu error " + e);
                    }
                }
                // Checking for .jpeg or .png
                else if (link.match(/\.(jpeg|png|jpg)$/i)) {
                    try {
                        zk.sendMessage(dest, { image: { url: link }, caption: alivemsg }, { quoted: ms });
                    }
                    catch (e) {
                        console.log("🥵🥵 Menu error " + e);
                        repondre("🥵🥵 Menu error " + e);
            }
                                                       
