import Modal from '@components/Modal';
import { Button, Label, Select } from '@pages/SignUp/styles';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';

let kickMember = '';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowKickWorkspaceModal: (flag: boolean) => void;
}
const KickWorkspaceModal: FC<Props> = ({ show, onCloseModal, setShowKickWorkspaceModal }) => {
  const { workspace } = useParams<{ workspace: string }>();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: memberData } = useSWR<IUser[]>(userData ? `/api/workspaces/${workspace}/members` : null, fetcher);
  const { revalidate: revalidateMember } = useSWR<IUser[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
  );

  // const onChangeKickMember = useCallback(
  //     (e) => {
  //       setKickMember(e.target.value);
  //     },
  //     [kickMember],
  // );

  const onKickMember = useCallback(
    (e) => {
      e.preventDefault();
      if (!kickMember || !kickMember.trim() || kickMember === '0') {
        toast.error('사용자를 선택하세요.', { position: 'bottom-center' });
        return;
      } else {
        axios
          .delete(`/api/workspaces/${workspace}/members/${kickMember}`)
          .then(() => {
            setShowKickWorkspaceModal(false);
            kickMember = '';
            revalidateMember();
          })
          .catch((error) => {
            console.dir(error);
            setShowKickWorkspaceModal(false);
            kickMember = '';
            toast.error('사용자 삭제에 실패했습니다.', { position: 'bottom-center' });
          });
      }
    },
    [workspace],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onKickMember}>
        <Label id="member-label">
          <span>사용자 이름</span>
          {/*<Input id="member" type="text" value={kickMember} onChange={onChangeKickMember} />*/}
          <Select
            id="memberId"
            onChange={(e) => {
              kickMember = e.target.value;
              console.log(e.target.value);
            }}
          >
            <option key={'0'} value={0}>
              {'선택하세요'}
            </option>
            ;
            {memberData?.map((member) => {
              if (userData?.id !== member.id) {
                return (
                  <option key={member.id} value={member.id}>
                    {member.nickname}
                  </option>
                );
              }
            })}
          </Select>
          <br />
          <br />
        </Label>
        <Button type="submit">사용자 삭제</Button>
      </form>
    </Modal>
  );
};

export default KickWorkspaceModal;
