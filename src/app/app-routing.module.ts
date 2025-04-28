import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HomemComponent } from './Components/homem/homem.component';
import { ServiceComponent } from './Components/service/service.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AlliancesComponent } from './Components/alliances/alliances.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { DisclaimerComponent } from './Components/disclaimer/disclaimer.component';
import { FECComponent } from './Components/fec/fec.component';
import { OurClientsComponent } from './Components/our-clients/our-clients.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { PlacesStudentsComponent } from './Components/places-students/places-students.component';
import { XproComponent } from './Components/xpro/xpro.component';
import { UiuxdesignComponent } from './Components/uiuxdesign/uiuxdesign.component';
import { TestproComponent } from './Components/testpro/testpro.component';
import { SoftwaretestingComponent } from './Components/softwaretesting/softwaretesting.component';
import { SalesforceComponent } from './Components/salesforce/salesforce.component';
import { PythonfullstackComponent } from './Components/pythonfullstack/pythonfullstack.component';
import { PowerbiComponent } from './Components/powerbi/powerbi.component';
import { PhpComponent } from './Components/php/php.component';
import { PdacComponent } from './Components/pdac/pdac.component';
import { JavafullstackComponent } from './Components/javafullstack/javafullstack.component';
import { HtmlcssbootstrapComponent } from './Components/htmlcssbootstrap/htmlcssbootstrap.component';
import { DotnetComponent } from './Components/dotnet/dotnet.component';
import { DatascienceComponent } from './Components/datascience/datascience.component';
import { CorejavaComponent } from './Components/corejava/corejava.component';
import { CcComponent } from './Components/cc/cc.component';
import { AwsComponent } from './Components/aws/aws.component';
import { AngularreactComponent } from './Components/angularreact/angularreact.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'homem',component:HomemComponent
  },
{
  path:'about',component:AboutComponent
},
{
  path:'service',component:ServiceComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'alliances',component:AlliancesComponent
},
{
  path:'privacy',component:PrivacyComponent
},
{
  path:'disclaimer',component:DisclaimerComponent
},
{
  path:'fec',component:FECComponent
},
{
  path:'our-clients',component:OurClientsComponent
},
{
  path:'overview',component:OverviewComponent
},
{
  path:'places-students',component:PlacesStudentsComponent
},{
  path:'xpro',component:XproComponent
},
{
  path:'uiuxdesign',component:UiuxdesignComponent
},{
  path:'testpro',component:TestproComponent
},
{
  path:'softwaretesting',component:SoftwaretestingComponent
},{
  path:'salesforce',component:SalesforceComponent
},{
  path:'pythonfullstack',component:PythonfullstackComponent
},{
  path:'powerbi',component:PowerbiComponent
},{
  path:'php',component:PhpComponent
},{
  path:'pdac',component:PdacComponent
},{
  path:'javafullstack',component:JavafullstackComponent
},{
  path:'htmlcssbootstrap',component:HtmlcssbootstrapComponent
},{
  path:'dotnet',component:DotnetComponent
},{
  path:'datascience',component:DatascienceComponent
},{
  path:'corejava',component:CorejavaComponent
},{
  path:'cc',component:CcComponent
},{
  path:'aws',component:AwsComponent
},{
  path:'angularreact',component:AngularreactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
