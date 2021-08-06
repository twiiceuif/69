FROM fusuf/whatsasena:latest

RUN git clone https://github.com/twiiceuif/69 /root/69
WORKDIR /root/69/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
