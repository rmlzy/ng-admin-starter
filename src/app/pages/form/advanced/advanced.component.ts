import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-advanced",
  templateUrl: "./advanced.component.html",
  styleUrls: ["./advanced.component.less"],
})
export class AdvancedComponent implements OnInit {
  advancedForm!: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit() {
    this.advancedForm = this.fb.group({
      repoName: ["", [Validators.required]],
      repoUrl: ["", [Validators.required]],
      repoOwner: ["", [Validators.required]],
      repoApprover: ["", [Validators.required]],
      repoDateRange: [null, [Validators.required]],
      repoType: ["", [Validators.required]],

      jobName: ["", [Validators.required]],
      jobDesc: ["", [Validators.required]],
      jobOwner: ["", [Validators.required]],
      jobManager: ["", [Validators.required]],
      remindDate: [null, [Validators.required]],
      jobType: ["", [Validators.required]],
    });
  }

  async submit(): Promise<void> {
    for (const i in this.advancedForm.controls) {
      this.advancedForm.controls[i].markAsDirty();
      this.advancedForm.controls[i].updateValueAndValidity();
    }
    if (!this.advancedForm.valid) {
      return;
    }
    console.log("Advanced Form 提交:", this.advancedForm.value);
    this.message.success("操作成功");
  }
}
