
import { PageLayout } from "../components/page-layout";
import { Container, Row, Col } from '@nextui-org/react';
import {NavbarTask} from '../components/NavbarTask';

export const Home: React.FC = () => (
  <PageLayout>
    <NavbarTask />
  </PageLayout>
);
