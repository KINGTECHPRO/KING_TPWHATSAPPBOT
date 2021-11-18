FROM nirmalgamage/king_techpro:public

RUN git clone https://github.com/KINGTECHPRO/KING_TPWHATSAPPBOT /root/KING_TPWHATSAPPBOT
WORKDIR /root/KING_TPWHATSAPPBOT/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
