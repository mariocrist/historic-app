import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HistoricApiService } from 'src/app/services/historic-api.service';
import { IHistoricTramos } from 'src/app/models/historic-tramos';
import { FormBuilder, NgForm , FormControl, FormGroup} from '@angular/forms';
interface Report {
    name: string;
    id: number;
}

@Component({
    selector: 'app-historic-tramos',
    templateUrl: './historic-tramos.component.html',
    styleUrls: ['./historic-tramos.component.css']
})
export class HistoricTramosComponent {

    reports: Report[] | undefined;
    cols = [
        {
            field: 'LineaNombre',
            header: 'Nombre Tramo'
        },
        {
            field: 'fecha',
            header: 'Fecha'
        },
        {
            field: 'Consumo',
            header: 'Consumo'
        },
        {
            field: 'Perdida',
            header: 'Perdida'
        },
        {
            field: 'CostoByConsumo',
            header: 'Costo por consumo'
        },
    ];

    historicTramos: IHistoricTramos[] = [];

    constructor(private historicApiService: HistoricApiService, private fb: FormBuilder) { }
    fGroup: FormGroup = this.fb.group({
        report: new FormControl<Report | null>(null),
        fechaIni: new FormControl<Date | null>(null),
        fechaFin: new FormControl<Date | null>(null)
    });

    preview: string = '';
    save() {
        this.preview = JSON.stringify(this.fGroup.value);
        this.getHistoricList(this.fGroup.value);
    }
    onOptionsSelected(event:any){
        console.log("the selected value is " + event);
        console.log(event.value);
        if (event.value.id == 1) {
            this.cols = [
                {
                    field: 'LineaNombre',
                    header: 'Nombre Tramo'
                },
                {
                    field: 'fecha',
                    header: 'Fecha'
                },
                {
                    field: 'Consumo',
                    header: 'Consumo'
                },
                {
                    field: 'Perdida',
                    header: 'Perdida'
                },
                {
                    field: 'CostoByConsumo',
                    header: 'Costo por consumo'
                },
            ];
        } else {
            this.cols = [
                {
                    field: 'NombreCliente',
                    header: 'Cliente'
                },
                {
                    field: 'LineaNombre',
                    header: 'Nombre Tramo'
                },
                {
                    field: 'fecha',
                    header: 'Fecha'
                },
                {
                    field: 'Consumo',
                    header: 'Consumo'
                },
                {
                    field: 'Perdida',
                    header: 'Perdida'
                },
                {
                    field: 'CostoByConsumo',
                    header: 'Costo por consumo'
                },
            ];
        }
    }
    

    


    ngOnInit(): void {
        this.reports = [
            { name: 'Histórico Consumos por Tramos', id:1 },
            { name: 'Histórico Consumos por Cliente', id:2 },
            { name: 'Top 20 Peores Tramos/Cliente',id:3 },
        ];
        this.fGroup = new FormGroup({
            report: new FormControl<Report | null>(null),
            fechaIni: new FormControl<Date | null>(null),
            fechaFin: new FormControl<Date | null>(null)
        });
        
        //this.getHistoricList();


    }

    ngOnDestroy() {

    }

    getHistoricList(value:any) {
        this.historicApiService.getHistoric(value).subscribe(
            response => {
                console.log(response)
                this.historicTramos = response;
            }
        )

    }

}
