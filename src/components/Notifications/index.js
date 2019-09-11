import React from 'react';
import { MdNotifications } from 'react-icons/md';
import { Container, Badge, NotificationList, Notification, Scroll } from './styles';

function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>ha dois dias atras</time>
            <button type="button">MArcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
