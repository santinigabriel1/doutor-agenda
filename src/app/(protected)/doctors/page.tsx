import {
  PageActions,
  PageContainer,
  PageTitle,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageContent,
} from "@/components/ui/page-container";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos da sua clínica</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Adicionar médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Médicos</h1>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
