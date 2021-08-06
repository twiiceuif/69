FROM fusuf/whatsasena:latest

RUN git clone https://github.com/twiiceuif/JulieMwol /root/JulieMwol
WORKDIR /root/JulieMwol/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
