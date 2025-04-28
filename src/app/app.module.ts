import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlliancesComponent } from './Components/alliances/alliances.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { DisclaimerComponent } from './Components/disclaimer/disclaimer.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { PlacesStudentsComponent } from './Components/places-students/places-students.component';
import { FECComponent } from './Components/fec/fec.component';
import { OutClientsComponent } from './Components/out-clients/out-clients.component';
import { OurClientsComponent } from './Components/our-clients/our-clients.component';
import { XproComponent } from './Components/xpro/xpro.component';
import { TestproComponent } from './Components/testpro/testpro.component';
import { JavafullstackComponent } from './Components/javafullstack/javafullstack.component';
import { SoftwaretestingComponent } from './Components/softwaretesting/softwaretesting.component';
import { PdacComponent } from './Components/pdac/pdac.component';
import { PythonfullstackComponent } from './Components/pythonfullstack/pythonfullstack.component';
import { DotnetComponent } from './Components/dotnet/dotnet.component';
import { UiuxdesignComponent } from './Components/uiuxdesign/uiuxdesign.component';
import { DatascienceComponent } from './Components/datascience/datascience.component';
import { PhpComponent } from './Components/php/php.component';
import { SalesforceComponent } from './Components/salesforce/salesforce.component';
import { CcComponent } from './Components/cc/cc.component';
import { CorejavaComponent } from './Components/corejava/corejava.component';
import { HtmlcssbootstrapComponent } from './Components/htmlcssbootstrap/htmlcssbootstrap.component';
import { AngularreactComponent } from './Components/angularreact/angularreact.component';
import { AwsComponent } from './Components/aws/aws.component';
import { PowerbiComponent } from './Components/powerbi/powerbi.component';

@NgModule({
  declarations: [
    AppComponent,
    AlliancesComponent,
    PrivacyComponent,
    DisclaimerComponent,
    OverviewComponent,
    PlacesStudentsComponent,
    FECComponent,
    OutClientsComponent,
    OurClientsComponent,
    XproComponent,
    TestproComponent,
    JavafullstackComponent,
    SoftwaretestingComponent,
    PdacComponent,
    PythonfullstackComponent,
    DotnetComponent,
    UiuxdesignComponent,
    DatascienceComponent,
    PhpComponent,
    SalesforceComponent,
    CcComponent,
    CorejavaComponent,
    HtmlcssbootstrapComponent,
    AngularreactComponent,
    AwsComponent,
    PowerbiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // ✅ This ensures Angular recognizes <router-outlet>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
